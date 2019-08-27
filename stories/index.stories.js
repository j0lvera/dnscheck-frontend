import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { Flex, Box } from "rebass";
// import theme from "@rebass/preset";
import Form from "../components/form";
import Button from "../components/button";
import theme from "../theme";

const withProvider = story => (
  <ThemeProvider theme={theme}>
    <Box bg="background" color="text" fontFamily="body" p={4}>
      {story()}
    </Box>
  </ThemeProvider>
);

storiesOf("Form", module)
  .addDecorator(withProvider)
  .add("default", () => <Form handleSubmit={e => console.log(e)} />);

storiesOf("Button", module)
  .addDecorator(withProvider)
  .add("Primary", () => <Button>Button Primary</Button>)
  .add("Disabled", () => <Button disabled>Button Primary</Button>);
