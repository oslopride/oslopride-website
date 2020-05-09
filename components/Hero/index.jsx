import useDimensions from "@/utils/useDimensions";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;

  & > * + * {
    margin: 15px 0;
  }
`;

const BackgroundColor = styled.div`
  background-color: #ebe7f4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${({ bottom }) => bottom || 0}px;
  z-index: -1;
`;

const ImageWrapper = styled.div`
  text-align: center;
  flex-grow: 1;
  max-width: 800px;
  margin: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  margin: 0;
  font-size: calc(30px + 3vw);
  line-height: 1;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  text-align: justify;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 400;
  max-width: 500px;
`;

const ProgramLinkWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const LinkButton = styled.a`
  padding: 1em 2em;
  background-color: rgb(31, 73, 198);
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 20px auto;
`;

const Hero = ({ className, imageURL, title, subtitle, url, urlText }) => {
  const [imageRef, { height }] = useDimensions();

  return (
    <Wrapper className={className}>
      <BackgroundColor bottom={height / 2 + 30} />
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <LinkButton href={url}>{urlText}</LinkButton>
      </TextWrapper>
      <ImageWrapper ref={imageRef}>
        <Image src={imageURL} alt="hero" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Hero;
