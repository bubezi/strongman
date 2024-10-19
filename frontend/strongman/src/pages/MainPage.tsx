import React, { useEffect, useState } from 'react';
import "../assets/css/active.css";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";

const MainPage: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  
  useEffect(() => {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display: none;");
    }

    // Adjust slide index and show current slide
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    } else if (slideIndex < 1) {
      setSlideIndex(slides.length);
    }

    slides[slideIndex - 1].setAttribute("style", "display: block;");

  }, [slideIndex]); // Effect runs whenever slideIndex changes

  function changeSlide(n: number) {
    setSlideIndex(prevIndex => prevIndex + n);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, []);

  return (
    <>
      <div id="first-div">
        <h1>ACTIVE VITALITY TEA +</h1>
        <h4>(Fertility Booster & Energy Enhancer)</h4>
        <div className="slideshow-container">
          <div className="slide">
            <img src={image1} alt="Image1" />
          </div>
          <div className="slide">
            <img src={image2} alt="Image2" />
          </div>
          <div className="slide">
            <img src={image3} alt="Image3" />
          </div>
          <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
          <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
        </div>
      </div>
    </>
  );
};

export default MainPage;
