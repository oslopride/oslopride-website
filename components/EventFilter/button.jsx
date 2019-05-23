import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const FilterButton = props => {
  const [clicked, setClick] = useState(props.clicked || false);

  const click = () => setClick(!clicked);

  return (
    <EventButton
      buttonColor={props.buttonColor}
      selectedColor={props.selectedColor}
      onClick={click}
      clicked={clicked}
    >
      <Icon icon={clicked ? faTimes : faCheck} />
      {props.title}
    </EventButton>
  );
};

export default FilterButton;

const EventButton = styled.button`
  display: inline-block;
  padding: 0.4em 0.8em;
  background-color: ${props => (props.clicked ? props.buttonColor : "white")};
  border: 2px solid
    ${props => (props.clicked ? props.selectedColor : props.buttonColor)};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 5px 5px 5px 0;

  :focus {
    outline: 0 none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  background-color: ${props =>
    props.clicked ? props.selectedColor : props.buttonColor};
`;
