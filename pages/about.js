import React from "react";
import { Box, Text } from "rebass";

const About = () => {
  return (
    <Box maxWidth={1} mx="auto" my={4} py={4} px={[3, 0]}>
      <Text as="h1">About DNS Check</Text>

      <Text as="p">
        DNSCheck.app is a web DNS lookup tool. It provides answers DNS Lookups
        (A, AAAA, MX, SOA, CNAME, NS, SRV, TXT).
      </Text>
    </Box>
  );
};

export default About;
