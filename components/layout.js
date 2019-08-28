import React from "react";
import { Box, Flex, Link, Text } from "rebass";
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

        <Text as="h1" mt={3} mb={0}>
          DNS Check
        </Text>
      </Flex>

      <Box mx="auto" as="main">
        {children}
      </Box>

      <Box as="footer" p={5}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: ["column", "row"],
            textAlign: ["center", "left"]
          }}
        >
          <Link mr={[0, 3]} href="https://jolvera.dev">
            Juan Olvera
          </Link>
          <Link mt={[3, 0]} mr={[0, 3]} href="https://zeit.co">
            Hosted on Now
          </Link>
          <Link mt={[3, 0]} href="https://github.com/j0lv3r4/dnscheck">
            Source Code
          </Link>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
