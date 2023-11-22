import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AutoComplete from "./AutoComplete";
import "../pages/Search.css";

export default function Search() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const size = 6;
  const location = useLocation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(""); // 이 부분을 추가

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get("keyword") || "";

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://perfume-pedia.site:3000/api/search?lastid=0&size=15&keyword=${encodeURIComponent(
            keyword
          )}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setItems(data.data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location, keyword]); // keyword를 의존성으로 추가

  const handleItemClick = async (uuid) => {
    try {
      const response = await fetch(
        `http://perfume-pedia.site:3000/api/search/advanced?uuid=${uuid}`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const detailData = await response.json();
      navigate(`/advanced?uuid=${uuid}`, {
        state: { detail: detailData.data },
      });
    } catch (err) {
      console.error("Error fetching details:", err);
      // 여기에서 사용자에게 오류 메시지를 표시할 수 있습니다.
    }
  };

  // AutoComplete에서 선택된 검색어의 UUID를 처리
  const handleAutoCompleteSelect = async (uuid) => {
    handleItemClick(uuid);
  };

  // AutoComplete 컴포넌트의 keyword를 업데이트
  const handleAutoCompleteChange = (newKeyword) => {
    setKeyword(newKeyword);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!items.length) return <div>No items found</div>;

  const startIndex = page * size;
  const firstSectionItems = items.slice(startIndex, startIndex + 3);
  const secondSectionItems = items.slice(startIndex + 3, startIndex + 6);

  return (
    <div>
      <AutoComplete
        onAutoCompleteSelect={handleAutoCompleteSelect}
        onChange={handleAutoCompleteChange}
        currentKeyword={keyword}
      />

      <section className="onesection">
        <div className="item-container">
          {firstSectionItems.map((item, index) => (
            <div
              key={`${item.perfume_name}-${item.brand_name}-${index}`}
              className="item"
              onClick={() => handleItemClick(item.uuid)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image_path}
                alt={`${item.perfume_name} by ${item.brand_name}`}
                className="item-image"
              />
              <div className="item-info">
                <h3>{item.perfume_name}</h3>
                <p>{item.brand_name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="onesection">
        <div className="item-container">
          {secondSectionItems.map((item, index) => (
            <div
              key={`${item.perfume_name}-${item.brand_name}-${index}`}
              className="item"
              onClick={() => handleItemClick(item.uuid)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image_path}
                alt={`${item.perfume_name} by ${item.brand_name}`}
                className="item-image"
              />
              <div className="item-info">
                <h3>{item.perfume_name}</h3>
                <p>{item.brand_name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="pagination">
        {[...Array(Math.ceil(15 / size))].map((_, index) => (
          <button key={index} onClick={() => setPage(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
