import NextLink from "next/link";
import React from "react";
import styled from "styled-components";

export const A = styled.a`
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
`;

const Link = ({ className, href, children, onClick, color }) => (
  <NextLink href={href} passHref>
    <A className={className} color={color} onClick={onClick}>
      {children}
    </A>
  </NextLink>
);

export default Link;
