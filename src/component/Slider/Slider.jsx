import React from "react";
import Slider from "react-slick";
import '../Slider/Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderItems = [
    { id: 1, image: "https://via.placeholder.com/600x300", title: "Football" },
    { id: 2, image: "https://via.placeholder.com/600x300", title: "Basketball" },
    { id: 3, image: "https://via.placeholder.com/600x300", title: "Tennis Racket" },
    { id: 4, image: "https://via.placeholder.com/600x300", title: "Running Shoes" },
  ];

  const settings = {
    dots: true,           // Show navigation dots
    infinite: true,       // Infinite looping
    speed: 500,           // Transition speed
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll at a time
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Autoplay speed in milliseconds
  };

  return (
    <div className="slider-container">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
