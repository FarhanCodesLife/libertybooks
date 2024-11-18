"use client";

import { useState, useEffect } from "react";
import { Book } from "./types/book";
import Card from "./componets/Card"
import "./globals.css";


export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await fetch("/api/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Delete a book
  const deleteBook = async (id: number) => {
    const res = await fetch("/api/books", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert("Book deleted successfully!");
      fetchBooks(); // Refresh the list
    } else {
      alert("Failed to delete book");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
       

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Explore Our Collection
          </h2>
        </div>
      
      <div className='flex justify-evenly items-center w-full'>
        <Card books={books} />
      </div>
      
    </div>
  );
}
