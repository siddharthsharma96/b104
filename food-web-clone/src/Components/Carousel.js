import { useOutletContext } from "react-router-dom";
import "./../Style/carousel.css";
import RestaurantCard from "./RestaurantCard";
import { useRef } from "react";

const Carousel = () => {
  const { restaurantsData } = useOutletContext();
  const slides = useRef(null);
  const handleNextClick = () => {
    if (slides.current) {
      const slide = slides.current.querySelector(".carousel__slide");
      if (slide) {
        const slideWidth = slide.offsetWidth;
        slides.current.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    }
  };
  const handlePrevClick = () => {
    if (slides.current) {
      const slide = slides.current.querySelector(".carousel__slide");
      if (slide) {
        const slideWidth = slide.offsetWidth;
        slides.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="carousel">
      <div className="carousel__container">
        <h2>Top restaurant chains in Noida</h2>
        <div className="carousel__controls">
          <button className="carousel__arrow" onClick={handlePrevClick}>
            <img src="/images/left.png"></img>
          </button>
          <button className="carousel__arrow" onClick={handleNextClick}>
            <img src="/images/right.png"></img>
          </button>
        </div>
      </div>
      <section className="carousel__slider">
        <ul className="carousel__slides" ref={slides}>
          {restaurantsData.map((res, i) => {
            return (
              <li key={i} className="carousel__slide">
                <RestaurantCard
                  restaurantsData={res}
                  show={false}
                ></RestaurantCard>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Carousel;
