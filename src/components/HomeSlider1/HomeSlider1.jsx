import React, { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { data } from "../../../data/booksDataShort.js";
import "./HomeSlider1.css";

function HomeSlider1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const slideRef = useRef(null);
  const startX = useRef(0);
  const endX = useRef(0);
  const autoSlideTimeout = useRef(null);

  useEffect(() => {
    autoSlideTimeout.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(autoSlideTimeout.current);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
    resetAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (startX.current - endX.current > 50) {
      nextSlide();
    } else if (startX.current - endX.current < -50) {
      prevSlide();
    }
    setIsDragging(false);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideTimeout.current);
    autoSlideTimeout.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <div>
      <div
        className="slider"
        ref={slideRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AiOutlineLeft className="arrow left" onClick={prevSlide} />
        <div
          className="slide"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div className="slideItem" key={index}>
              <div className="info-button">
                <h1>{item.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem aperiam vel vitae eius quasi sint? Inventore, fuga
                  ullam veniam itaque neque, nam unde suscipit accusamus quae
                  vitae perspiciatis autem aliquid! Laborum, soluta quasi
                  sapiente ab at, natus totam inventore repudiandae, corporis
                  eveniet ratione vitae.
                </p>
                <button>learn more</button>
              </div>
              <div className="bookImages">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
        <AiOutlineRight className="arrow right" onClick={nextSlide} />
      </div>
      <div className="dots">
        {data.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HomeSlider1;
