import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Navigation from "./navigation";

const TopHeader = styled.header`
  width: 100%;
  padding: 5px 10px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1025px) {
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

  @media (min-width: 1025px) {
    display: inline-block;
    width: 100%;
  }
`;

const LogoMobile = styled.img`
  width: 50px;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const PrideDate = styled.div`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  height: initial;
`;

const ButtonWrapper = styled.div`
  width: 50px;
  text-align: right;
  margin-right: 5px;

  @media (min-width: 1025px) {
    width: 103px;
    margin-right: 10px;
  }
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const MenuIcon = styled(FaBars)`
  color: black;
  width: 30px;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
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
        <ButtonWrapper>
          <MenuButton onClick={() => setOpen(!isOpen)} aria-label="Meny d">
            <MenuIcon />
          </MenuButton>
        </ButtonWrapper>
      </TopHeader>
      <Navigation visible={isOpen} callback={close} />
    </>
  );
};

export default Header;
