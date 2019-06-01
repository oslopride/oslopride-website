import theme from "@/utils/theme";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Navigation from "./navigation";

const TopHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  height: 70px;

  * {
    height: 100%;
  }
`;

const Logo = styled.img`
  display: none;
  width: auto;

  @media (min-width: 1025px) {
    display: inline-block;
  }
`;

const LogoMobile = styled.img`
  width: auto;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const PrideDate = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  height: initial;
  text-align: center;
  padding: 0 1em;
`;

const MenuIcon = styled(FaBars)`
  color: black;
  width: auto;
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: inline-block;
  cursor: pointer;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <Wrapper>
      <TopHeader>
        <Link href="/">
          <a>
            <Logo
              src="/static/oslopride.svg"
              alt="Oslo Pride Logo"
              onClick={close}
            />
            <LogoMobile
              src="/static/prideheart.svg"
              alt="Oslo Pride Logo"
              onClick={close}
            />
          </a>
        </Link>
        <PrideDate>14. juni – 23. juni 2019</PrideDate>
        <MenuButton onClick={() => setOpen(!isOpen)} aria-label="Meny d">
          <MenuIcon />
        </MenuButton>
      </TopHeader>
      <Navigation visible={isOpen} callback={close} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9001;
`;

export default Header;
