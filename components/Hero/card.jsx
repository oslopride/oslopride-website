import React, { useState } from "react";
import styled from "styled-components";

const cardColors = [
  "#CD424D",
  "#D17A61",
  "#D5A43E",
  "#25A081",
  "#93ADC3",
  "#625887"
];

const Card = ({ className, title, body, index }) => {
  return (
    <Wrapper
      backgroundColor={cardColors[index % cardColors.length]}
      className={className}
    >
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  margin: 0 0.5em;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fafafa;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  @media (min-width: 600px) {
    margin: 0 1em;
    height: 250px;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  line-height: 1.2em;
  text-align: center;
  margin: 0;
`;

const Body = styled.p`
  line-height: 1.1em;
  text-align: center;
  font-size: 16px;
  margin: 15px 0 0 0;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

export default Card;
