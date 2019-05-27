import React from "react";
import styled from "styled-components";

const Selectors = ({ selectors, className }) => {
  const selectorElements = selectors.map(({ name, selected, callback }) => (
    <label key={name}>
      <input
        type="radio"
        name="event-filter-selectors"
        onChange={callback}
        checked={selected}
      />
      <SelectorLabel>{name}</SelectorLabel>
    </label>
  ));

  return (
    <Container className={className}>
      <SelectorTitle>Arena</SelectorTitle>
      <SelectorList>{selectorElements}</SelectorList>
    </Container>
  );
};

export default Selectors;

const Container = styled.div`
  width: 100%;
`;

const SelectorTitle = styled.div`
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

const SelectorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  label {
    margin: 2px 8px;
  }
`;

const SelectorLabel = styled.span`
  margin-left: 5px;
`;
