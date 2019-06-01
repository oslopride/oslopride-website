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
  height: 250px;
  margin: 0 auto;
  max-width: 600px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fafafa;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 18px;
  margin: 15px 0 0 0;
`;

export default Card;
