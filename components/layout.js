import React from "react";
import { Box, Link } from "rebass";
import { Global } from "@emotion/core";
import Head from "./head";
import Header from "./header";
import theme from "../theme";

export const Container = props => (
  <Box {...props} mx="auto">
    {props.children}
  </Box>
);

function Layout(props) {
  return (
    <>
      <Head
        title="DNS Check"
        description="Simple, Useful Domain DNS lookup information"
      />
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0,
            background: "hsl(230, 25%, 18%)"
          },
          "[data-whatintent='mouse'] *:focus": {
            outline: "none"
          },
          "[data-whatintent='keyboard'] *:focus": {
            outline: `${theme.colors.primary} solid 3px`
          }
        }}
      />

      <Box variant="styles.root" bg="background" color="text">
        <Header />

        <Box mx="auto" as="main">
          {props.children}
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
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
