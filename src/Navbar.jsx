import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // 검색 로직을 여기에 추가하세요
        // 예를 들면, 검색 결과 페이지로 리디렉션 할 수 있습니다:
        // props.history.push(`/search?query=${searchTerm}`);
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                PerfumePedia📓
            </div>
            {/* 검색창 */}
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="향수 또는 원하는 노트를 입력하세요"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">🔍</button>
            </form>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/notes" className="nav-link">Notes</Link>
            <Link to="/perfumes" className="nav-link">Perfumes</Link>
            <Link to="/search" className="nav-link">Search</Link>
        </div>
    );
};
