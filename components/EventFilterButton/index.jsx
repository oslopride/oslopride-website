import styled from "styled-components";

const EventFilterButton = props => (
  <EventButton
    selectedColor={props.selectedColor}
    buttonColor={props.buttonColor}
  >
    <div />
    {props.title}
  </EventButton>
);

const EventButton = styled.button`
  display: inline-block;
  padding: 0.4em 0.8em;
  background: ${props => props.buttonColor};
  border: 0;
  color: black;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;

  div {
    display: inline-block;
    transform: rotate(45deg);
    height: 12px;
    width: 6px;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
    margin-right: 10px;
  }

  :active {
    background: ${props => props.selectedColor};
    color: white;

    div {
      border-bottom: 3px solid white;
      border-right: 3px solid white;
    }
  }

  :focus {
    outline: 0 none;
  }
`;

export default EventFilterButton;
