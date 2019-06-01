import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { FaLongArrowAltRight } from "react-icons/fa";

const Slide = ({ image, title, body, link }) => (
  <Wrapper>
    <div>
      <Parallax
        y={["-20%", 0]}
        styleOuter={{ height: "90%" }}
        styleInner={{ height: "100%" }}
      >
        <Image src={image} />
      </Parallax>
      <ContentWrapper>
        <Content href={link}>
          <Title>{title}</Title>
          <Body>{body}</Body>
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
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  bottom: calc(200px - 10%);
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const Content = styled.a`
  max-width: 600px;
  margin: 0 1em;
  padding: 1em;
  background-color: #cd424d;
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: #fafafa;
  line-height: 1.2em;
  text-align: center;
  margin: 0;
`;

const Body = styled.p`
  color: #fafafa;
  line-height: 1em;
  text-align: center;
  font-size: 18px;
  margin: 15px 0 0 0;
`;

export default Slide;
