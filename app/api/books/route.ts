import { NextResponse } from "next/server";
import { Book } from "../../types/book";

// In-memory database
let books: Book[] = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "Clean Code", author: "Robert C. Martin" },
];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  const { title, author } = await req.json();

  if (!title || !author) {
    return NextResponse.json(
      { error: "Title and author are required" },
      { status: 400 }
    );
  }

  const newBook: Book = { id: books.length + 1, title, author };
  books.push(newBook);

  return NextResponse.json(newBook, { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  books = books.filter((book) => book.id !== id);

  return NextResponse.json({ message: "Book deleted successfully!" });
}
