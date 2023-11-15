import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Main.css';

export default function Main() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
        setSearchTerm("");
    };


    return(
        <section>
            <div className="main">
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
                <img src="/img/logo1.jpg" alt="" style={{height : "800px", width : "auto"}}/>
            </div>
        </section>
    );
}