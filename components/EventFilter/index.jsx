import theme from "@/utils/theme";
import React from "react";
import styled from "styled-components";
import FilterButton from "./button.jsx";

const EventFilter = props => {
  const { events, visible } = props;

  const filterType = (events, whichButton) => {};
  const filterCategory = (events, whichButton) => {};

  return (
    <Container visible={props.visible}>
      <Row>
        <RowButton
          title="Alle"
          buttonColor={theme.lightPink}
          selectedColor={theme.pink}
          clicked={true}
        />
        <RowButton
          title="Universelt utformet"
          buttonColor={theme.lightBlue}
          selectedColor={theme.blue}
        />
        <RowButton
          title="Tegnspråktolket"
          buttonColor={theme.lightGreen}
          selectedColor={theme.green}
        />
      </Row>
      <Row>
        <RowTitle>Arrangementstyper</RowTitle>
        <RowButton
          title="Fest"
          buttonColor={theme.lightOrange}
          selectedColor={theme.red}
        />
        <RowButton
          title="Konsert"
          buttonColor={theme.lightGreen}
          selectedColor={theme.green}
        />
        <RowButton
          title="Utstilling"
          buttonColor={theme.lightBlue}
          selectedColor={theme.blue}
        />
        <RowButton
          title="Debatt"
          buttonColor={theme.lightPurple}
          selectedColor={theme.purple}
        />
        <RowButton
          title="Annet"
          buttonColor={theme.gray}
          selectedColor={theme.darkgray}
        />
      </Row>
      <Row>
        <RowTitle>Områder</RowTitle>
        <RowButton
          title="Pride Parade"
          buttonColor={theme.lightOrange}
          selectedColor={theme.red}
        />
        <RowButton
          title="Pride Park"
          buttonColor={theme.lightGreen}
          selectedColor={theme.green}
        />
        <RowButton
          title="Pride House"
          buttonColor={theme.lightBlue}
          selectedColor={theme.blue}
        />
        <RowButton
          title="Pride Art"
          buttonColor={theme.lightPurple}
          selectedColor={theme.purple}
        />
        <RowButton
          title="Ekstern arena"
          buttonColor={theme.gray}
          selectedColor={theme.darkgray}
        />
      </Row>
    </Container>
  );
};

export default EventFilter;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  transition: max-height 0.3s ease-in-out;
  height: auto;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? "auto" : "0")};
  margin: ${({ visible }) => (visible ? "10px 0" : "0")};
`;

const Row = styled.div`
  width: 100%;
  margin: 10px 0;
`;

const RowTitle = styled.div`
  width: 100%;
  display: inline-block;
  margin-right: 20px;
  font-weight: 500;
`;

const RowButton = styled(FilterButton)``;
