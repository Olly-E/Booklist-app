import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';


const NavBar = () => {
    const {books} = useContext(BookContext);
  return (
    <div className='navbar'>
        <h1>Ninja Reading List</h1>
        <p>Currently you've got {books.length} books to eat through... </p>
    </div>
  )
}

export default NavBar;