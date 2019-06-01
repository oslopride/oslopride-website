import React from "react";
import styled from "styled-components";

const Slide = ({ image, title }) => (
  <Wrapper>
    <div>
      <Image src={image} />
      <Content>
        <p>{title}</p>
      </Content>
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
    padding: 0 3vw;
  }
`;

const Image = styled.img`
  height: 70%;
  max-width: 100%;
  position: relative;
  left: -3vw;
`;

const Content = styled.div`
  height: 40%;
  position: relative;
  background-color: #cd424d;
  padding: 1em;
  top: -10%;
  right: -3vw;
`;

export default Slide;
