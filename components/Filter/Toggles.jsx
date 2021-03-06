import Switch from "@/components/Switch";
import theme from "@/utils/theme";
import React from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import styled from "styled-components";

const Toggles = ({ toggles }) => (
  <>
    {toggles.map(({ on, off, isOn, callback }) => (
      <ToggleWrapper key={`toggle-${off}-${on}`}>
        <ToggleText onClick={isOn ? callback : undefined} gray={isOn}>
          {off}
        </ToggleText>
        <Toggle isOn={isOn} callback={callback} />
        <ToggleText onClick={isOn ? undefined : callback} gray={!isOn}>
          {on}
        </ToggleText>
      </ToggleWrapper>
    ))}
  </>
);

const ToggleText = styled.span`
  color: ${({ gray }) => (gray ? "gray" : "black")};
  cursor: pointer;
`;

const Toggle = styled(Switch)`
  margin: 10px 5px;
  flex-shrink: 0;
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

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export default Toggles;

