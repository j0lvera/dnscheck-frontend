import React from "react";
import { Flex, Box, Text } from "rebass";

function Logo() {
  return (
    <Flex flexDirection="column" alignItems="center" tabIndex={0} p={1}>
      <Box
        sx={{
          mb: 2,
          width: "25px",
          height: "25px",
          borderRadius: "50px",
          border: "4px solid #fff"
        }}
      ></Box>
      <Text fontWeight={700}>DNS Check</Text>
    </Flex>
  );
}

export default Logo;
