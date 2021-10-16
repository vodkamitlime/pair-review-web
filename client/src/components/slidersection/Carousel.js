import { useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/carouselimg1.png";
import img2 from "../../assets/carouselimg2.png";

const images = [img1, img2];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return <div className="arrow next" onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="arrow prev" onClick={onClick}></div>;
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 3300,
    autoplaySpeed: 3500,
    swipeToSlide: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="carouselcon">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={`image${idx}`}
          >
            <img
              src={img}
              alt={img}
              style={{
                width: "100%",
                // height: '100%',
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
