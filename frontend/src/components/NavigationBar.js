import React from 'react';
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="bg=gray=800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-gray-800 text-xl font-bold">
                    <Link to="/">EV Benchmark</Link>
                </div>
                <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                    <Link to="/" className="text-gray-800 hover:text-gray-400 px-4">Home</Link>
                    <Link to="/abc" className="text-gray-800 hover:text-gray-400 px-4">Car Management</Link>
                    <Link to="/def" className="text-gray-800 hover:text-gray-400 px-4">User Management</Link>
                </ol>
            </div>
        </nav>
);
};

export default NavigationBar;
