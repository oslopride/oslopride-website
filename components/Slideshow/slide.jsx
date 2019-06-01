import React from "react";
import styled from "styled-components";

const Slide = ({ image, title }) => (
  <Wrapper>
    <div>
      <Image src={image} />
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
  bottom: 10%;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 150px
  );
`;

const Image = styled.img`
  height: 90%;
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
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: #fafafa;
`;

export default Slide;
