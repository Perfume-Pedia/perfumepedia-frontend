import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Main.css";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

      const response = await fetch(
        `http://perfume-pedia.site:3000/api/autocomplete?keyword=${encodeURIComponent(
          keyword
        )}`
      );

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

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  return (
    <section>
      <div className="main">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="향수 또는 원하는 노트를 입력하세요"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          {loading && <div>Loading...</div>}
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item.keyword)}>
                  {" "}
                  {item.keyword}
                </li>
              ))}
            </ul>
          )}
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
        <img
          src="/img/logo1.jpg"
          alt=""
          style={{ height: "800px", width: "auto" }}
        />
      </div>
    </section>
  );
}
