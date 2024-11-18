import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query); // Trigger search with the query
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img
                    src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                    alt="StackOverflow Logo"
                    className="logo"
                />
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Your Answers Here..."
                        className="search-bar"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <i className="search-icon fas fa-search"></i>
                </div>
                <span className="navbar-item">Products</span>
            </div>

            <div className="navbar-right">
                <i className="navbar-icon fa-regular fa-envelope"></i>
                <i className="navbar-icon fas fa-trophy"></i>
                <i className="navbar-icon fa-regular fa-note-sticky"></i>
                <img
                    src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
                    alt="User Avatar"
                    className="user-avatar"
                />
            </div>
        </div>
    );
};

export default Navbar;
