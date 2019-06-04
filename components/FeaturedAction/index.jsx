import theme from "@/utils/theme";
import React from "react";
import styled from "styled-components";

const FeaturedActions = () => {
  return (
    <Wrapper>
      <Image src="https://images.ctfassets.net/r522rjz18n3u/58XT8KdYIwCSeAiQQ24YwO/1757190cacc1c0571a5bf17308e841c3/47744330842_635b05fc0e_o.jpg" />
      <TextBox>
        <Text href="/a/registrering-av-arrangement">
          <h2>Registrer arrangement</h2>
          <p>Finn ut hvordan du kan registrere et arrangement i vårt program</p>
        </Text>
      </TextBox>
    </Wrapper>
  );
};

export default FeaturedActions;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 100px;
`;

const Image = styled.img`
  position: relative;
  max-width: 500px;
  height: auto;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  position: absolute;
  top: 200px;
  left: 300px;
  width: 400px;
  height: 200px;
  background-color: ${theme.lightGreen};
  border: 2px solid ${theme.green};
  transition: 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
    border: 4px solid ${theme.green};
    cursor: pointer;
  }
`;

const Text = styled.a`
  margin: 30px;
  text-decoration: none;

  h2 {
    color: ${theme.green};
    text-transform: uppercase;
    font-size: 20px;
  }

  p {
    color: black;
    font-size: 18px;
    font-weight: 300;
  }
`;
