import React from "react";
import styled from "styled-components";
import Card from "./card";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "60px",
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  speed: 500
};

const Hero = () => (
  <Wrapper>
    <Overlay />
    <Image src="https://images.ctfassets.net/r522rjz18n3u/58XT8KdYIwCSeAiQQ24YwO/1757190cacc1c0571a5bf17308e841c3/47744330842_635b05fc0e_o.jpg" />
    <CardWrapper {...settings}>
      <Card
        title="Oslo Pride"
        body="Norges største feiring av skeiv kjærlighet og mangfold"
        index={0}
      />
      <Card
        title="Oslo Pride"
        body="Norges største feiring av skeiv kjærlighet og mangfold"
        index={1}
      />
      <Card
        title="Oslo Pride"
        body="Norges største feiring av skeiv kjærlighet og mangfold"
        index={2}
      />
      <Card
        title="Oslo Pride"
        body="Norges største feiring av skeiv kjærlighet og mangfold"
        index={3}
      />
      <Card
        title="Oslo Pride"
        body="Norges største feiring av skeiv kjærlighet og mangfold"
        index={4}
      />
      <Card
        title="Oslo Pride"
        body="Norges største feiring av skeiv kjærlighet og mangfold"
        index={5}
      />
    </CardWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    height: 80vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;

  @media (min-width: 600px) {
    height: 70vh;
  }
`;

const CardWrapper = styled(Slider)`
  width: 100%;
  position: absolute;
  bottom: 0;
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

export default Hero;
