import Switch from "@/components/Switch";
import theme from "@/utils/theme";
import React from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import styled from "styled-components";

const Toggles = ({ toggles, className }) => {
  return (
    <Container className={className}>
      {toggles.map(({ on, off, isOn, callback }) => (
        <ToggleWrapper key={`toggle-${off}-${on}`}>
          <ToggleText gray={isOn}>{off}</ToggleText>
          <Toggle isOn={isOn} callback={callback} />
          <ToggleText gray={!isOn}>{on}</ToggleText>
        </ToggleWrapper>
      ))}
    </Container>
  );
};

const ToggleText = styled.span`
  color: ${({ gray }) => (gray ? "gray" : "black")};
`;

const Toggle = styled(Switch)`
  margin: 0 5px;
`;

const OnIcon = styled(FaToggleOn)`
  height: 1.5em;
  width: auto;
  margin: 0 5px;
  color: ${theme.purple};
`;

const OffIcon = styled(FaToggleOff)`
  height: 1.5em;
  width: auto;
  margin: 0 5px;
  color: ${theme.purple};
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Toggles;

const Container = styled.div`
  width: 100%;
`;
