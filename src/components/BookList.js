import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';
import BookDetaills from './BookDetaills';

const BookList = () => {
    const {books} = useContext(BookContext);
  return books.length ? (
      <div className='book-list'>
   <ul>
       {books.map(book => {
           return (<BookDetaills book={book} key={book.id} />);
       })}
   </ul>
   </div>
  ) : (
      <div className="empty">Seem like you have eaten through all of them (^_^) </div>
  )
}

export default BookList;