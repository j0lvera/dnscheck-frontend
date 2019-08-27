/** @jsx jsx */
import React from "react";
import { storiesOf } from "@storybook/react";
import { jsx, ThemeProvider, Layout } from "theme-ui";
import Form from "../components/form";
import Button from "../components/button";
import theme from "../theme";

const withProvider = story => (
  <ThemeProvider theme={theme}>
    <Layout>{story()}</Layout>
  </ThemeProvider>
);

storiesOf("Form", module)
  .addDecorator(withProvider)
  .add("default", () => (
    <Layout sx={{ p: 3 }}>
      <Form handleSubmit={e => console.log(e)} />
    </Layout>
  ));

storiesOf("Button", module)
  .addDecorator(withProvider)
  .add("default", () => <Button>Hello Button</Button>);
