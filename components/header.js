import React from "react";
import { Flex, Box, Link as RebassLink } from "rebass";
import Logo from "./logo";

const Link = props => (
  <RebassLink
    {...props}
    fontWeight={700}
    py={2}
    px={3}
    sx={{
      textDecoration: "none"
    }}
  >
    {props.children}
  </RebassLink>
);

function Header() {
  return (
    <Flex alignItems="center">
      <Logo />
      <Box mx="auto" />
      <Link href="#!">About</Link>
      <Link href="#!">API</Link>
    </Flex>
  );
}

export default Header;
