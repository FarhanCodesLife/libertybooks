"use client";

import { useState, useEffect } from "react";
import { Book } from "./types/book";
import Card from "./componets/Card"

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
      <h1>Books</h1>
      
      <div>
        <Card books={books}/>
      </div>
      
    </div>
  );
}
