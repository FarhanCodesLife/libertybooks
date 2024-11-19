import Image from 'next/image';
import React from 'react';

const Card = ({ books }) => {
  return (
    <div className="grid   grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {books.map((book) => {
        return (
          <div
            key={book.id}
            className="bg-white cursor-pointer shadow-lg h-96 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image src={book.image} alt={book.title} className='w-full h-72' />
            {/* <img
              src={book.image}
              alt={book.title}
              className="w-full h-72 "
            /> */}
            <div className="p-4">
              <h1 className="text-lg font-bold text-gray-800">{book.title}</h1>
              <h2 className="text-md text-gray-600">{book.author}</h2>
              <p className="text-sm text-gray-500">Price: ${book.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
