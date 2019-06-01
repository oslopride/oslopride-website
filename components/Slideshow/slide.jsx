import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

const Slide = ({ image, title }) => (
  <Wrapper>
    <div>
      <Parallax
        y={["-20%", 0]}
        styleOuter={{ height: "90%" }}
        styleInner={{ height: "100%" }}
      >
        <Image src={image} />
      </Parallax>
      <ImageOverlay />
      <ContentWrapper>
        <Content>
          <Title>{title}</Title>
        </Content>
      </ContentWrapper>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  & > div {
    display: inline-block;
    height: 100%;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0) 150px
  );
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  bottom: calc(150px - 10%);
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 1em;
  padding: 1em;
  background-color: #cd424d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: #fafafa;
`;

export default Slide;
