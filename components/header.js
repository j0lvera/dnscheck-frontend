import "what-input";
import React from "react";
import { Flex, Box, Link as RebassLink } from "rebass";
import { FaGithub } from "react-icons/fa";
import Logo from "./logo";

const Link = props => (
  <RebassLink
    fontWeight={700}
    py={2}
    px={3}
    sx={{
      textDecoration: "none"
    }}
    {...props}
  >
    {props.children}
  </RebassLink>
);

function Header(props) {
  return (
    <Box {...props} py={1} bg="muted">
      <Flex width={3} alignItems="center" mx="auto">
        <Link href="/" aria-label="home" px={0} tabIndex={0}>
          <Logo />
        </Link>
        <Box mx="auto" />
        <Link href="/about">About</Link>
        <Link href="/docs/api">API (beta)</Link>
        <Link href="https://github.com/j0lv3r4/dnscheck" aria-label="GitHub">
          <FaGithub size="1.5em" />
        </Link>
      </Flex>
    </Box>
  );
}

export default Header;
