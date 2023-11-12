import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation(); // 현재 위치를 알아내기 위해 useLocation 사용

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
    };

    // 홈 화면인지 확인하는 함수
    const isHome = location.pathname === '/';

    return (
        <div className="navbar">
            <div className="navbar-logo">
                PerfumePedia📓
            </div>
            {!isHome && ( // 홈 화면이 아닐 때만 검색창 표시
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                        type="text"
                        placeholder="향수 또는 원하는 노트를 입력하세요."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">🔍</button>
                </form>
            )}
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/notes" className="nav-link">Notes</Link>
            <Link to="/perfumes" className="nav-link">Perfumes</Link>
            {/* <Link to="/search" className="nav-link">Search</Link> */}
        </div>
    );
}
