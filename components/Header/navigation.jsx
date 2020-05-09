import Link, { ExternalLink } from "@/components/Link";
import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? "150px" : "0")};
`;

const NavigationGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NavigationTitle = styled.p`
width: 100%;
text-align: center;
  font-size 18px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 5px 8px;
`;

const NavigationLink = styled(Link)`
  font-size: 18px;
  margin: 15px 8px;
`;

const ExternalNavigationLink = styled(ExternalLink)`
  font-size: 18px;
  margin: 15px 8px;
`;

const Navigation = ({ className, visible, callback }) => (
  <Container className={className} visible={visible}>
    <NavigationGroup>
      <NavigationLink href="/about" onClick={callback} arrow={false}>
        Om Oss
      </NavigationLink>
      <NavigationLink href="/contact" onClick={callback} arrow={false}>
        Kontakt
      </NavigationLink>
      <NavigationLink href="/partners" onClick={callback} arrow={false}>
        Partnere
      </NavigationLink>
      <ExternalNavigationLink
        href="https://butikk.oslopride.no/"
        onClick={callback}
        arrow={false}
      >
        Pridebutikken
      </ExternalNavigationLink>
    </NavigationGroup>
  </Container>
);

export default Navigation;
