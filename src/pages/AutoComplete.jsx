import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/AutoComplete.css";

export default function AutoComplete({ onSearchSubmit, onChange, currentKeyword }) {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const handleAutoCompleteSelect = async (uuid, selectedKeyword) => {
  //   // 클릭된 키워드를 설정한 후에 이동합니다.
  //   setKeyword(selectedKeyword);

  //   // 검색 결과 페이지로 이동합니다.
  //   navigate(`/search?keyword=${encodeURIComponent(selectedKeyword)}`);

  //   // 선택된 UUID를 onSearchSubmit으로 전달합니다.
  //   onSearchSubmit(uuid);
  // };

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

  // return (
  //   <div className="autocomplete">
  //     <input
  //       type="text"
  //       placeholder="검색어를 입력하세요"
  //       value={keyword}
  //       onChange={handleInputChange}
  //     />
  //     {loading && <div>Loading...</div>}
  //     {suggestions.length > 0 && (
  //       <ul>
  //         {suggestions.map((item, index) => (
  //           <li
  //             key={index}
  //             onClick={() => handleAutoCompleteSelect(item.uuid, item.keyword)}
  //           >
  //             {item.keyword}
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
}
