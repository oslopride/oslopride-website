import Sheet from "@/components/Sheet";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Sheet)`
  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const Content = styled.p`
  text-align: center;
`;

const is400Error = statusCode => statusCode >= 400 && statusCode < 500;

const Error = ({ statusCode }) => {
  if (is400Error(statusCode)) {
    return (
      <Wrapper>
        <h1>Siden du leter etter finnes ikke</h1>
        <Content>
          Vi har lett i alle kriker og kroker, men kan ikke finne siden du leter
          etter.
        </Content>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Noe er riv ruskende galt...</h1>
      <Content>
        Vi beklager, men det du forsøkte på fungerte rett og slett ikke.
      </Content>
    </Wrapper>
  );
};

Error.getInitialProps = async ({ res, err, isServer }) => {
  if (isServer) {
    if (res) {
      return { statusCode: res.statusCode };
    }
    if (err) {
      return { statusCode: err.statusCode };
    }
  }
  return { statusCode: undefined };
};

export default Error;
