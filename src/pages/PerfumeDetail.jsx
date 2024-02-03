import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../pages/PerfumeDetail.css";

export default function PerfumeDetail() {
  const location = useLocation();
  const { detail } = location.state || {};
  const [isBookmarked, setIsBookmarked] = useState(localStorage.getItem(`favPerfume_${detail.uuid}`) === "true");

  if (!detail) {
    return <div>Loading...</div>;
  }

  // 북마크
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    localStorage.setItem(`favPerfume_${detail.uuid}`, isBookmarked ? "false" : "true");
  };

  // 각 노트 배열에 유효한 내용이 있는지 확인
  const isValidArray = (arr) => arr && arr.length > 0 && arr.some((item) => item.trim() !== "");
  const hasTopNotes = isValidArray(detail.top_note_names);
  const hasMiddleNotes = isValidArray(detail.middle_note_names);
  const hasBaseNotes = isValidArray(detail.base_note_names);
  const hasSingleNotes = isValidArray(detail.single_note_names);

  return (
    <div>
      <section className="perfume-img-section">
        <img className="perfume-img" src={detail.image_path} alt={detail.perfume_name} />

        <section className="perfume-text">
          <div className="bookmark-section">
            <img className="bookmark-img" src={isBookmarked ? "img/bookmarks-click.png" : "img/bookmarks-nonclick.png"} alt="북마크" onClick={toggleBookmark} />
          </div>
          <h3 className="perfume-header">{detail.perfume_name}</h3>
          {hasTopNotes && <p className="perfume-text">탑 노트 : {detail.top_note_names.join(", ")}</p>}
          {hasMiddleNotes && <p className="perfume-text">미들 노트 : {detail.middle_note_names.join(", ")}</p>}
          {hasBaseNotes && <p className="perfume-text">베이스 노트 : {detail.base_note_names.join(", ")}</p>}
          {hasSingleNotes && <p className="perfume-text">싱글 노트 : {detail.single_note_names.join(", ")}</p>}
          <section className="etc-section">
            <p>가격 : {detail.price}</p>
            {detail.url && (
              <a href={detail.url} target="_blank" rel="noopener noreferrer" className="link">
                향수 보러가기
              </a>
            )}
          </section>
        </section>
      </section>
    </div>
  );
}
