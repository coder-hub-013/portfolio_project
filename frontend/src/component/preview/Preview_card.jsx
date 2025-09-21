import { useEffect, useState, useRef } from "react";
import "./Preview_card.css";
export default function Preview_card({ image, para, heading }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto scroll every 3s
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % image.length);
    }, 5000);

    return () => clearInterval(timeoutRef.current);
  }, [image.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % image.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + image.length) % image.length);
  };

  return (
    <div className="project-screen">
      <div className="preview-card">
        <div
          className="preview-slider"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {image.map((src, i) => (
            <img loading="lazy" key={i} src={src} alt={heading} className="preview-img" />
          ))}
        </div>
        {image.length > 1 && (
          <button className="preview-btn next" onClick={nextSlide}>
            ›
          </button>
        )}
        {image.length > 1 && (
          <button className="preview-btn prev" onClick={prevSlide}>
            ‹
          </button>
        )}
      </div>

      <div className="desc">
        <h3>{heading}</h3>
        <p style={{ whiteSpace: "pre-line" }}>{para}</p>
      </div>
    </div>
  );
}
