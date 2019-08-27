import React from "react";
import { Box } from "rebass";

function Fieldset(props) {
  return (
    <Box
      {...props}
      as="fieldset"
      sx={{
        border: 0,
        p: 0
      }}
    >
      {props.children}
    </Box>
  );
}

export default Fieldset;
