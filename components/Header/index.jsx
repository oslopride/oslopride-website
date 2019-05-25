import Button from "@/components/Button";
import theme from "@/utils/theme";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./navigation";

const TopHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;

  @media (min-width: 600px) {
    padding: 10px 40px;
  }
`;

const LogoWrapper = styled.div`
  width: 150px;
`;
const DateWrapper = styled.div`
  width: 190px;
`;
const MenuButtonWrapper = styled.div`
  width: 150px;
  text-align: right;
`;

const Logo = styled.img`
  display: none;

  @media (min-width: 600px) {
    display: inline-block;
    width: 100%;
  }
`;

const LogoMobile = styled.img`
  width: 50px;

  @media (min-width: 600px) {
    display: none;
  }
`;

const PrideDate = styled.div`
  color: ${theme.gray};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  transform: ${props => (props.rotate ? "rotate(180deg)" : "0")};
  transition: transform 0.2s ease;
  color: ${theme.purple};
`;

const MenuButton = styled(Button)`
  max-width: 50px;

  @media (min-width: 600px) {
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <TopHeader>
        <LogoWrapper>
          <Link href="/">
            <a>
              <Logo
                src="/static/oslopride.svg"
                alt="Oslo Pride Logo"
                onClick={close}
              />
              <LogoMobile
                src="/static/prideheart.jpg"
                alt="Oslo Pride Logo"
                onClick={close}
              />
            </a>
          </Link>
        </LogoWrapper>
        <DateWrapper>
          <PrideDate>14. juni – 23. juni 2019</PrideDate>
        </DateWrapper>
        <MenuButtonWrapper>
          <MenuButton onClick={() => setOpen(!isOpen)}>
            <MenuIcon
              rotate={isOpen ? "true" : undefined}
              icon={faBars}
              size="2x"
            />
          </MenuButton>
        </MenuButtonWrapper>
      </TopHeader>
      <Navigation visible={isOpen} callback={close} />
    </>
  );
};

export default Header;
