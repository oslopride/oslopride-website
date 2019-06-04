import Button from "@/components/Button";
import Link from "@/components/Link";
import theme from "@/utils/theme";
import NextLink from "next/link";
import React from "react";
import styled from "styled-components";

const FeaturedButton = ({ title, link, color }) => {
  return (
    <ButtonWrapper>
      <NextLink href={link} passHref>
        <a>
          <ButtonStyle>{title}</ButtonStyle>
        </a>
      </NextLink>
    </ButtonWrapper>
  );
};

const FeaturedButtons = () => {
  return (
    <Wrapper>
      <FeaturedButton
        title="vær frivillig"
        link="/a/engasjer-deg-i-oslo-pride"
      />
      <FeaturedButton title="bli partner" link="/become-partner" />
      <FeaturedButton
        title="registrer arrangement"
        link="/a/registrering-av-arrangement"
      />
    </Wrapper>
  );
};

export default FeaturedButtons;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

const ButtonWrapper = styled.div`
  margin: 10px;
  width: 100%;
  transition: transform 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media (min-width: 1002px) {
    width: 30%;
  }
`;
const ButtonLink = styled(Link)`
  :hover,
  :focus {
    text-decoration: none;
  }
`;

const ButtonStyle = styled(Button)`
  color: white;
  background-color: ${theme.green};
  padding: 10px;
  width: 100%;
  height: 100%;

  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 2px;

  @media (min-width: 1002px) {
    font-size: 20px;
  }
`;
