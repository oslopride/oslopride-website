import React, { useState } from "react";
import styled from "styled-components";

const FilterButton = props => {
  const [clicked, setClick] = useState(false);

  const click = () => setClick(!clicked);

  return (
    <EventButton
      buttonColor={props.buttonColor}
      selectedColor={props.selectedColor}
      onClick={click}
      clicked={clicked}
    >
      {props.title}
    </EventButton>
  );
};

export default FilterButton;

const EventButton = styled.button`
  display: inline-block;
  padding: 0.4em 0.8em;
  background: ${props =>
    props.clicked ? props.selectedColor : props.buttonColor};
  border: 0;
  color: ${props => (props.clicked ? "white" : "black")};
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px 5px 5px 0;

  :focus {
    outline: 0 none;
  }
`;
