import React, { useEffect, useState } from 'react';
import '../App.css';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
const images = [
  { src: slider1, caption: 'Slider One ' },
  { src: slider2, caption: 'Slider Two' },
  { src: slider3, caption: 'Slider Three' }
];

const CustomSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n: number) => {
    setSlideIndex(prev => {
      const next = prev + n;
      return next > images.length ? 1 : next < 1 ? images.length : next;
    });
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active");
  }, [slideIndex]);

  return (
    <>
      <div className="slideshow-container">
        {images.map((img, i) => (
          <div className="mySlides fade" key={i}>
            <div className="numbertext">{i + 1} / {images.length}</div>
            <img src={img.src} alt={`Slide ${i}`} style={{ width: "100%" }} />
            <div className="text">{img.caption}</div>
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>

      <div style={{ textAlign: "center" }}>
        {images.map((_, i) => (
          <span key={i} className="dot" onClick={() => currentSlide(i + 1)}></span>
        ))}
      </div>
    </>
  );
};

export default CustomSlider;
