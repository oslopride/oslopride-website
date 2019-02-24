import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > * {
    padding: 0 15px;
    width: 100%;

    @media (min-width: 800px) {
      width: 50%;
    }
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  height: 150px;

  @media (min-width: 800px) {
    height: 300px;
  }
`;

const TextWrapper = styled.div`
  margin-top: 15px;

  & > h1 {
    text-align: center;
    color: #401080;
    margin: 0;
    font-size: 50px;
    line-height: 1;

    @media (min-width: 800px) {
      text-align: left;
    }
  }

  & > p {
    text-align: justify;
    margin-bottom: 0;

    @media (min-width: 800px) {
      text-align: left;
    }
  }
`;

const Hero = ({ imageURL, title, subtitle }) => (
  <Wrapper>
    <ImageWrapper>
      <Image src={imageURL} alt="hero" />
    </ImageWrapper>
    <TextWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TextWrapper>
  </Wrapper>
);

export default Hero;
