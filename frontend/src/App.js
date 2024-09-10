import logo from './logo.svg';
import './App.css';
import './index.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/FooterBar";
import CarAdminPage from "./pages/CarAdminPage";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavigationBar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/abc" element={<CarAdminPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
