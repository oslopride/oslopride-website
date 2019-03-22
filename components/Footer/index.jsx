import theme from "@/utils/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: ${theme.blue};
  color: white;
  padding-bottom: 20px;
  width: 100%;
`;

const Container = styled.footer`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const OrgInfo = styled.div`
  margin-right: 30px;
  margin-top: 50px;
  text-align: right;
`;

const LinkWrapper = styled.div`
  margin: 30px 30px 0 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const LinkSection = styled.div``;

const FooterLinks = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <LinkWrapper>
        <LinkSection>
          <Link href="/about" passHref>
            <FooterLinks>
              <h3>OM OSS</h3>
            </FooterLinks>
          </Link>
          <Link href="/contact" passHref>
            <FooterLinks>Kontakt</FooterLinks>
          </Link>
          <Link href="/partners" passHref>
            <FooterLinks>Partnere</FooterLinks>
          </Link>
        </LinkSection>
        <LinkSection>
          <FooterLinks href="https://www.facebook.com/oslopride/">
            <h3>FØLG OSS</h3>
          </FooterLinks>
          <FooterLinks href="https://www.facebook.com/oslopride/">
            Facebook
          </FooterLinks>
          <FooterLinks href="https://www.instagram.com/oslopride/">
            Instagram
          </FooterLinks>
        </LinkSection>
        <Link href="/interpride2020" passHref>
          <FooterLinks>
            <h3>INTERPRIDE AGM 2020</h3>
          </FooterLinks>
        </Link>
      </LinkWrapper>
      <OrgInfo>
        <h3>OSLO PRIDE AS</h3>
        <p>
          c/o Foreningen FRI
          <br />
          Tollbugata 24
          <br />
          0157 OSLO
        </p>
        <p>Tlf: 915 44 090</p>
        <p>Org.nr: 986 625 860</p>
      </OrgInfo>
    </Container>
  </Wrapper>
);

export default Footer;
