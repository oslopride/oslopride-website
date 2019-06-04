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
  justify-content: center;
  position: relative;
  margin: 50px 0 150px 0;
`;

const Image = styled.img`
  position: relative;
  max-width: 100%;
  height: auto;
  border-radius: 2px;

  @media (min-width: 800px) {
    max-width: 50%;
    left: -20%;
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  position: absolute;
  top: 70%;
  max-width: 90%;
  height: auto;
  background-color: white};
  border: 2px solid #25A081;
  border-radius: 2px;
  transition: 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
    border: 4px solid #25A081;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    max-width: 50%;
    top: 60%;
    left: 40%;
  }
`;

const Text = styled.a`
  margin: 20px;
  text-decoration: none;

  h2 {
    color: #25a081;
    text-transform: uppercase;
    font-size: 20px;
  }

  p {
    color: black;
    font-size: 16px;
    font-weight: 300;
  }

  @media (min-width: 500px) {
    margin: 30px;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }
`;
