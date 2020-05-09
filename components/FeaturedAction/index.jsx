import { ExternalLink } from "@/components/Link";
import theme from "@/utils/theme";
import React from "react";
import styled from "styled-components";

const FeaturedAction = ({ image, title, description, link }) => {
  return (
    <Wrapper>
      <Text href={link} arrow={false} color={theme.green}>
        <h2>{title}</h2>
        <p>{description}</p>
        <LinkButton href={link}>Les mer</LinkButton>
      </Text>
      <Image src={image} />
    </Wrapper>
  );
};

export default FeaturedAction;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 60px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 2px;
  margin-bottom: 30px;

  @media (min-width: 1100px) {
    max-width: 270px;
  }
`;

const Text = styled.div`
  width: 100%;
  max-width: 490px;
  text-align: center;

  h2 {
    margin-top: 0;
    font-size: calc(30px + 1vw);
  }

  p {
    font-size: 18px;
  }

  @media (min-width: 1100px) {
    text-align: left;
  }
`;

const LinkButton = styled.a`
  padding: 0.85em 3em;
  background-color: rgb(31, 73, 198);
  color: white;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 20px auto 50px auto;
  display: inline-block;
  width: 100%;
  max-width: 200px;
`;
