import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./pages/Main";
import Notes from "./pages/Notes";
import Perfumes from "./pages/Perfumes";
import MyPage from "./pages/Mypage";
import PerfumeDetail from "./pages/PerfumeDetail";
import Search from "./pages/Search";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/advanced" element={<PerfumeDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
