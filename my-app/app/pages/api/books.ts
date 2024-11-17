import { NextApiRequest, NextApiResponse } from "next";

// Define the book type
interface Book {
  id: number;
  title: string;
  author: string;
}

// Fake in-memory database
let books: Book[] = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin" },
];

// Handler function
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Return all books
      res.status(200).json(books);
      break;

    case "POST":
      // Add a new book
      const { title, author } = req.body;
      if (!title || !author) {
        res.status(400).json({ error: "Title and author are required" });
        return;
      }
      const newBook: Book = { id: books.length + 1, title, author };
      books.push(newBook);
      res.status(201).json(newBook);
      break;

    case "DELETE":
      // Delete a book by ID
      const { id } = req.body;
      books = books.filter((book) => book.id !== id);
      res.status(200).json({ message: "Book deleted successfully!" });
      break;

    default:
      // Method not allowed
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
