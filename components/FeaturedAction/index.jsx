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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 60px;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  max-width: 490px;
  height: auto;
  border-radius: 2px;
`;

const Text = styled.div`
  width: 100%;
  max-width: 490px;
  h2 {
    margin-top: 0;
    font-size: calc(30px + 1vw);
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
