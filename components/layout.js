import React from "react";
import { Box, Flex, Link } from "rebass";
import { Global } from "@emotion/core";

export const Container = props => (
  <Box {...props} mx="auto">
    {props.children}
  </Box>
);

function Layout({ children }) {
  return (
    <Box bg="background" color="text" fontFamily="body">
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0,
            background: "hsl(230, 25%, 18%)"
          }
        }}
      />
      <Flex
        as="header"
        p={4}
        alignItems="center"
        flexDirection="column"
        maxWidth="1"
        mx="auto"
      >
        <img src="https://icon.now.sh/public/50/BB99FF" alt="World icon" />

        <h1>DNS Check</h1>
      </Flex>

      <Box mx="auto" as="main">
        {children}
      </Box>

      <Box as="footer" p={5}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Link mr={3} href="https://jolvera.dev">
            Juan Olvera
          </Link>
          <Link mr={3} href="https://zeit.co">
            Hosted on Now
          </Link>
          <Link href="https://github.com/j0lv3r4/dnscheck">Source Code</Link>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
