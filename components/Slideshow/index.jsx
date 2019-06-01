import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Slide from "./slide";

const Slideshow = ({ slides, className }) => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 5000,
    lazyLoad: true,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Wrapper {...settings}>
      {slides.map((slide, index) => (
        <div key={`${slide.title}-${index}`}>
          <Slide {...slide} />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Slider)`
  display: flex;
  height: 100%;
  flex-direction: column;

  & > div {
    flex-grow: 1;

    .slick-track,
    .slick-slide,
    .slick-slide > div,
    .slick-slide > div > div {
      height: 100%;
    }
  }

  & > ul {
    position: unset;
  }
`;

export default Slideshow;
