import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/AutoComplete.css";

export default function AutoComplete({ onSearchSubmit, onChange, currentKeyword }) {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
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

    if (keyword.length > 0) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [keyword]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
    onChange(e.target.value);
  };
}
