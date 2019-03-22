import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: white;
  border-top: 3px solid #ddd;
  justify-content: space-around;
  padding: 0 40px;
  display: wrap;
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <h3>Oslo Pride AS</h3>
        <p>
          c/o Foreningen FRI
          <br />
          Tollbugata 24
          <br />
          0157 OSLO
        </p>
        <p>Tlf: 915 44 090</p>
        <p>Org.nr: 986 625 860</p>
      </div>
      <div>
        <Link href="/about">
          <h3>Om oss</h3>
        </Link>
        <Link href="/contact">
          <p>Kontakt</p>
        </Link>
        <Link href="/">
          <p>Partnere-kommer snart</p>
        </Link>
      </div>
      <div>
        <Link href="https://www.facebook.com/oslopride/">
          <h3>Følg oss</h3>
        </Link>
        <Link href="https://www.facebook.com/oslopride/">
          <p>Facebook</p>
        </Link>
        <Link href="https://www.instagram.com/oslopride/">
          <p>Instagram</p>
        </Link>
      </div>
      <div>
        <h3>INTERPRIDE AGM 2020</h3>
        <p>mer info kommer snart</p>
      </div>
    </Container>
  );
};

export default Footer;
