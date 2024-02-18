import React from "react";

function PerfumeCard({ brand, image, backgroundColor, direction }) {
  const alignmentClass =
    direction === "left" ? "left-section" : "right-section";
  const arrowImage =
    direction === "left" ? "/img/left-arrow.png" : "/img/right-arrow.png";

  return (
    <section className={backgroundColor}>
      {direction === "left" && (
        <>
          <div className={alignmentClass}>
            <img className="img" src={image} alt={brand} />
          </div>
          <div
            className={
              alignmentClass === "left-section"
                ? "right-section"
                : "left-section"
            }
          >
            <h1 className="perfume-brand">{brand}</h1>
            <p className="text">
              {brand} 보러가기&nbsp;
              <img className="arrow" src={arrowImage} alt="arrow" />
            </p>
          </div>
        </>
      )}
      {direction === "right" && (
        <>
          <div
            className={
              alignmentClass === "left-section"
                ? "right-section"
                : "left-section"
            }
          >
            <h1 className="perfume-brand">{brand}</h1>
            <p className="text">
              <img className="arrow" src={arrowImage} alt="arrow" />
              &nbsp;{brand} 보러가기
            </p>
          </div>
          <div className={alignmentClass}>
            <img className="img" src={image} alt={brand} />
          </div>
        </>
      )}
    </section>
  );
}

export default PerfumeCard;
