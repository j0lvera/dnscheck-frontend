import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "emotion-theming";
import { Box } from "rebass";
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
  .add("default", () => <Form handleSubmit={action("form submitted!")} />);

storiesOf("Button", module)
  .addDecorator(withProvider)
  .add("Primary", () => <Button>Button Primary</Button>)
  .add("Disabled", () => <Button disabled>Button Primary</Button>);
