import React from 'react';
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="bg=gray=800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <Link to="/">EV Benchmark</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/abc" className="text-gray-300 hover:text-white">Car Management</Link>
                    <Link to="/def" className="text-gray-300 hover:text-white">User Management</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
