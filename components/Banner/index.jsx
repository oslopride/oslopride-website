import React from "react";
import styled from "styled-components";

const Banner = ({ children, color, title }) => {
  return (
    <Wrapper background={color}>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: ${props => (props.background ? props.background : white)};
  padding: 20px;
`;
const TitleWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const Content = styled.div``;
