import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <header className="fixed top-5 left-0 right-0  ">
      <div className="">
        <nav className="flex space-x-6 mx-auto max-w-2xl bg-white shadow-lg rounded-xl px-6 py-3 flex items-center justify-between ">
          <a href="#" className="text-gray-700 hover:text-green-600">خانه</a>
          <a href="#" className="text-gray-700 hover:text-green-600">درباره</a>
          <a href="#" className="text-gray-700 hover:text-green-600">تماس</a>
        </nav>
      </div>
    </header>
        </div>
    );
}
export default Header;