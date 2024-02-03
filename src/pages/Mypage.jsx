import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PreferPerfumes() {
  const [preferPerfumes, setPreferPerfumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // 북마크된 향수의 UUID 가져오기
  const getBookmarkedPerfumes = () => {
    const allKeys = Object.keys(localStorage);
    const bookmarkedUuids = allKeys.filter((key) => key.startsWith("favPerfume_") && localStorage.getItem(key) === "true").map((key) => key.replace("favPerfume_", ""));
    return bookmarkedUuids;
  };

  // API 호출
  const fetchPreferPerfumes = async (uuids) => {
    if (uuids.length === 0) {
      // 북마크된 향수가 없을 경우
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`http://perfume-pedia.site:3000/api/favperfume?uuids=${encodeURIComponent(uuids.join(","))}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPreferPerfumes(data.data.items);
      console.log("Favorited perfumes:", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const bookmarkedUuids = getBookmarkedPerfumes();
    fetchPreferPerfumes(bookmarkedUuids);
  }, [location.search]); // 의존성 배열에 location.search를 넣어서 URL 변경시에도 업데이트

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>선호 향수 목록</h1>
      {preferPerfumes.length === 0 ? (
        <div>No prefer perfumes found</div>
      ) : (
        <ul>
          {preferPerfumes.map((perfume) => (
            <li key={perfume.uuid}>
              {perfume.perfume_name} by {perfume.brand_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
