import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex space-x-7">
                            <div className="flex items-center">
                                <Link to="/" className="text-xl font-bold text-gray-800">NFC Card</Link>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link to="/login" className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">ورود</Link>
                            <Link to="/register" className="py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;