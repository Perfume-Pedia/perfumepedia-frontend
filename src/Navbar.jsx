import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (searchKeyword) => {
    navigate(`/search?keyword=${encodeURIComponent(searchKeyword)}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (keyword) => {
    try {
      setLoading(true);

      const response = await fetch(`http://perfume-pedia.site:3000/api/autocomplete?keyword=${encodeURIComponent(keyword)}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.data && data.data.items) {
        setSuggestions(data.data.items);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  // 홈 화면인지 확인하는 함수
  const isHome = location.pathname === "/";

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-link">
          PerfumePedia
        </Link>
      </div>
      {!isHome && ( // 홈 화면이 아닐 때만 검색창 표시
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input type="text" placeholder="향수 또는 원하는 노트를 입력하세요." value={searchTerm} onChange={handleInputChange} className="search-input" />
          {loading && ""}
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item.keyword)}>
                  {item.keyword}
                </li>
              ))}
            </ul>
          )}
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      )}

      <Link to="/notes" className="nav-link">
        Notes
      </Link>
      <Link to="/perfumes" className="nav-link">
        Perfumes
      </Link>
      <Link to="/mypage" className="nav-link">
        MyPage
      </Link>
    </div>
  );
}
