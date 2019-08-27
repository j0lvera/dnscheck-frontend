import React from "react";
import { Box, Link } from "rebass";
import { Global } from "@emotion/core";

function Layout({ children }) {
  return (
    <Box bg="background" color="text" fontFamily="body">
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0
          }
        }}
      />
      <Box as="header" p={4}>
        <img src="https://icon.now.sh/public/50/BB99FF" alt="World icon" />

        <h1>DNS Check</h1>
      </Box>

      <Box as="main">{children}</Box>

      <Box as="footer" p={4}>
        <Link href="https://jolvera.dev">Juan Olvera</Link>
        <Link href="https://zeit.co">Hosted on Now</Link>
        <Link href="https://github.com/j0lv3r4/dnscheck">Source Code</Link>
      </Box>
    </Box>
  );
}

export default Layout;
