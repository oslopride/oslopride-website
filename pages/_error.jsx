import Sheet from "@/components/Sheet";
import NextSeo from "next-seo";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Sheet)`
  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const Error = ({ statusCode }) => {
  switch (statusCode) {
    case 404:
      return (
        <Wrapper>
          <h1>Siden du leter etter finnes ikke</h1>
          <p>
            Vi har lett i alle kriker og kroker, men kan ikke finne siden du
            leter etter.
          </p>
          <NextSeo
            config={{
              title: "Siden finnes ikke",
              noindex: true
            }}
          />
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <h1>Noe er riv ruskende galt...</h1>
          <p>
            Vi beklager, men det du forsøkte på fungerte rett og slett ikke.
          </p>
          <NextSeo
            config={{
              title: "Noe gikk galt",
              noindex: true
            }}
          />
        </Wrapper>
      );
  }
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
