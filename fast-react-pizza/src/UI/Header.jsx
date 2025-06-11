// import React from 'react'
import { Link } from 'react-router-dom';
import SearchOrder from '../Features/Order/SearchOrder';
import Username from '../Features/User/Username';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-2 00 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co. 🍕
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
