import theme from "@/utils/theme";
import NextLink from "next/link";
import React from "react";
import styled from "styled-components";

export const A = styled.a`
  cursor: pointer;
  box-shadow: inset 0 -0.3em 0 0 ${({ color }) => color || theme.lightGray};
  transition: box-shadow 0.2s;
  text-decoration: inherit;
  color: inherit;

  :hover,
  :focus {
    box-shadow: inset 0 -1.1em 0 0 ${({ color }) => color || theme.lightGray};
  }
`;

const Link = ({ className, href, children, onClick, color }) => (
  <NextLink href={href} passHref>
    <A className={className} color={color} onClick={onClick}>
      {children}
    </A>
  </NextLink>
);

export default Link;
