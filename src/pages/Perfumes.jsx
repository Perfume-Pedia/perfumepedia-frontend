import React from "react";
import PerfumeCard from "../Component/Perfumes/PerfumeCard";
import perfumes from "../Component/Perfumes/perfumesData";
import "../pages/Perfumes.css";

export default function Perfumes() {
  return (
    <div>
      {perfumes.map((perfume, index) => (
        <PerfumeCard
          key={index}
          brand={perfume.brand}
          image={perfume.image}
          backgroundColor={perfume.backgroundColor}
          direction={perfume.direction}
        />
      ))}
    </div>
  );
}
