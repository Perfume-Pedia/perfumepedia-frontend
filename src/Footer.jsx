import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <img src="img/logo1.jpg" alt="" />
        </div>
        <div className="footer-section">
          <p>Home</p>
          <p>Notes</p>
          <p>perfumes</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>소셜 미디어 아이콘 및 링크</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved </p>
      </div>
    </footer>
  );
  //return <div className="footer"></div>;
}