import React from "react";
import PropTypes from "prop-types";

import NextLink from "@/components/NextLink";

const Navigation = ({ className }) => (
  <nav className={className}>
    <ul>
      <li>
        <NextLink href="/program">Program</NextLink>
      </li>
      <li>
        <NextLink href="/pride-art">Pride Art</NextLink>
      </li>
      <li>
        <NextLink href="/pride-park">Pride Park</NextLink>
      </li>
      <li>
        <NextLink href="/pride-house">Pride House</NextLink>
      </li>
      <li>
        <NextLink href="/pride-parade">Pride Parade</NextLink>
      </li>
      <li>
        <NextLink href="/about">Om Oss</NextLink>
      </li>
      <li>
        <NextLink href="/contact">Kontakt</NextLink>
      </li>
      <li>
        <NextLink href="/partners">Partnere</NextLink>
      </li>
      <li>
        <NextLink href="/become-partner">Bli Partner</NextLink>
      </li>
      <li>
        <NextLink href="/pride-store">Pridebutikken</NextLink>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string
};

Navigation.defaultProps = {
  className: undefined
};

export default Navigation;
