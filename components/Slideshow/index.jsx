import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Slide from "./slide";

const SlideColors = [
  "#CD424D",
  "#D17A61",
  "#D5A43E",
  "#25A081",
  "#93ADC3",
  "#625887"
];

const Slideshow = ({ slides, className }) => {
  const settings = {
    autoplay: slides.length > 1,
    autoplaySpeed: 5000,
    lazyLoad: true,
    pauseOnHover: false,
    dots: slides.length > 1,
    arrows: false,
    infinite: slides.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Wrapper>
      <Overlay />
      <Carousel {...settings}>
        {slides.map((slide, index) => (
          <div key={`${slide.title}-${index}`}>
            <Slide
              {...slide}
              color={
                SlideColors[Math.floor(Math.random() * SlideColors.length)]
              }
            />
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Carousel = styled(Slider)`
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

const Overlay = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 150px
  );
`;

const Wrapper = styled.div`
  height: 100%;
`;

export default Slideshow;
