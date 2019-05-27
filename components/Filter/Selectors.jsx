import theme from "@/utils/theme";
import React from "react";
import styled from "styled-components";

const Selectors = ({ selectors, className }) => {
  const selectorElements = selectors.map(({ name, selected, callback }) => (
    <SelectBox key={name} checked={selected}>
      <InvisibleInput
        type="radio"
        name="event-filter-selectors"
        onChange={callback}
        checked={selected}
      />
      <SelectorLabel>{name}</SelectorLabel>
    </SelectBox>
  ));

  return (
    <Container className={className}>
      <SelectorTitle>Arena</SelectorTitle>
      <SelectorList>{selectorElements}</SelectorList>
    </Container>
  );
};

export default Selectors;

const SelectBox = styled.label`
  flex-grow: 1;
  cursor: pointer;
  text-align: center;
  color: ${({ checked }) => (checked ? "white" : "inherit")};
  background-color: ${({ checked }) => (checked ? theme.purple : "inherit")};

  &:not(:last-child) {
    border-right: 2px solid ${theme.purple};
  }
`;

const InvisibleInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
`;

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
  border: 2px solid ${theme.purple};
`;

const SelectorLabel = styled.span`
  margin-left: 5px;
`;
