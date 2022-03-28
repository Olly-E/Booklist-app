import React, {createContext, useState} from 'react';
import {v1, v4} from 'uuid';

export  const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Who stole the meat', author: 'Olasunkanmi Nuelly', id: 1},
        {title: 'Folake for the night', author: 'Pheelz Mr Producer', id: 2}
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: v4()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
        {props.children}
    </BookContext.Provider>
        
    
  )
}

export default BookContextProvider;