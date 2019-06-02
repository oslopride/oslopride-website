import Link from "@/components/Link";
import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  transition: height 0.2s ease-in-out;
  overflow: hidden;
  height: ${({ visible }) => (visible ? "300px" : "0")};

  @media (min-width: 500px) {
    height: ${({ visible }) => (visible ? "250px" : "0")};
  }
`;

const NavigationGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavigationLink = styled(Link)`
  font-size: 18px;
  margin: 5px 8px;
`;

const Navigation = ({ className, visible, callback }) => (
  <Container className={className} visible={visible}>
    <NavigationGroup>
      <NavigationLink href="/events" onClick={callback} arrow={false}>
        Program 2019
      </NavigationLink>
    </NavigationGroup>
    <NavigationGroup>
      <NavigationLink href="/pride-parade" onClick={callback} arrow={false}>
        Pride Parade
      </NavigationLink>
      <NavigationLink href="/pride-park" onClick={callback} arrow={false}>
        Pride Park
      </NavigationLink>
      <NavigationLink href="/pride-house" onClick={callback} arrow={false}>
        Pride House
      </NavigationLink>
      <NavigationLink href="/pride-art" onClick={callback} arrow={false}>
        Pride Art
      </NavigationLink>
    </NavigationGroup>

    <NavigationGroup>
      <NavigationLink href="/contact" onClick={callback} arrow={false}>
        Kontakt
      </NavigationLink>
      <NavigationLink href="/about" onClick={callback} arrow={false}>
        Om Oss
      </NavigationLink>
      <NavigationLink href="/partners" onClick={callback} arrow={false}>
        Partnere
      </NavigationLink>
      <NavigationLink href="/become-partner" onClick={callback} arrow={false}>
        Bli Partner
      </NavigationLink>
      <NavigationLink
        href="https://butikk.oslopride.no/"
        onClick={callback}
        arrow={false}
      >
        Pridebutikken
      </NavigationLink>
    </NavigationGroup>
  </Container>
);

export default Navigation;
