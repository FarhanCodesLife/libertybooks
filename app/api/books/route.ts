import { NextResponse } from "next/server";
import { Book } from "../../types/book";

let books:Book = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 9.99,
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 8.49,
    image: "https://covers.openlibrary.org/b/id/1535416-L.jpg"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 7.99,
    image: "https://covers.openlibrary.org/b/id/8213893-L.jpg"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 6.99,
    image: "https://covers.openlibrary.org/b/id/8231990-L.jpg"
  },
  {
    id: 6,
    title: "Moby Dick",
    author: "Herman Melville",
    price: 11.49,
    image: "https://covers.openlibrary.org/b/id/7222275-L.jpg"
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: 12.99,
    image: "https://covers.openlibrary.org/b/id/7222261-L.jpg"
  },
  {
    id: 8,
    title: "The Odyssey",
    author: "Homer",
    price: 10.99,
    image: "https://covers.openlibrary.org/b/id/8228895-L.jpg"
  },
  {
    id: 9,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 9.99,
    image: "https://covers.openlibrary.org/b/id/8228751-L.jpg"
  },
  {
    id: 10,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    price: 14.99,
    image: "https://covers.openlibrary.org/b/id/7222251-L.jpg"
  },
  {
    id: 11,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 8.99,
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
  },
  {
    id: 12,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    price: 11.99,
    image: "https://covers.openlibrary.org/b/id/7222276-L.jpg"
  },
  {
    id: 13,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 7.49,
    image: "https://covers.openlibrary.org/b/id/8294680-L.jpg"
  },
  {
    id: 14,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    price: 6.99,
    image: "https://covers.openlibrary.org/b/id/8228940-L.jpg"
  },
  {
    id: 15,
    title: "Great Expectations",
    author: "Charles Dickens",
    price: 9.49,
    image: "https://covers.openlibrary.org/b/id/7222282-L.jpg"
  },
  {
    id: 16,
    title: "Dracula",
    author: "Bram Stoker",
    price: 8.99,
    image: "https://covers.openlibrary.org/b/id/8228733-L.jpg"
  },
  {
    id: 17,
    title: "Frankenstein",
    author: "Mary Shelley",
    price: 7.49,
    image: "https://covers.openlibrary.org/b/id/8285123-L.jpg"
  },
  {
    id: 18,
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    price: 8.49,
    image: "https://covers.openlibrary.org/b/id/8228780-L.jpg"
  },
  {
    id: 19,
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    price: 13.99,
    image: "https://covers.openlibrary.org/b/id/8278476-L.jpg"
  },
  {
    id: 20,
    title: "Les Misérables",
    author: "Victor Hugo",
    price: 15.99,
    image: "https://covers.openlibrary.org/b/id/8228755-L.jpg"
  }
];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  const { title, author,image,price } = await req.json();

  if (!title || !author) {
    return NextResponse.json(
      { error: "Title and author are required" },
      { status: 400 }
    );
  }

  const newBook: Book = { id: books.length + 1, title, author,image,price };
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
