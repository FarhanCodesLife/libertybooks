import React from 'react'

const Card = (books) => {
    
  return (

    <div>
        { books.map((book)=>{
        return(
            <div key={book.id}>
                <h1>{book.id}</h1>
                <h1>{book.title}</h1>
                <h1>{book.auther}</h1>

            </div>
        )

    })}
    </div>

  )
}

export default Card