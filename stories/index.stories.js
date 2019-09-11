import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "emotion-theming";
import { Box } from "rebass";
import ResultsGrid from "../components/results-grid";
import Table from "../components/table";
import Form from "../components/form";
import Button from "../components/button";
import Header from "../components/header";
import Logo from "../components/logo";
import theme from "../theme";
import payload from "./payload";
import regions from "./regions";
import regionsLoading from "./regions-loading";
import regionsWithoutData from "./regions-without-data";

const withProvider = story => (
  <ThemeProvider theme={theme}>
    <Box
      bg="background"
      color="text"
      fontFamily="body"
      p={4}
      sx={{
        "*:focus": {
          outline: `${theme.colors.primary} solid 3px`
        }
      }}
    >
      {story()}
    </Box>
  </ThemeProvider>
);

storiesOf("Logo", module)
  .addDecorator(withProvider)
  .add("default", () => <Logo />);

storiesOf("Header", module)
  .addDecorator(withProvider)
  .add("default", () => <Header />);

storiesOf("Form", module)
  .addDecorator(withProvider)
  .add("default", () => <Form handleSubmit={action("form submitted!")} />);

storiesOf("Button", module)
  .addDecorator(withProvider)
  .add("Primary", () => <Button>Button Primary</Button>)
  .add("Disabled", () => <Button disabled>Button Primary</Button>);

storiesOf("Table", module)
  .addDecorator(withProvider)
  .add("Default", () => <Table records={payload.data} />);

storiesOf("Grid", module)
  .addDecorator(withProvider)
  .add("With results", () => <ResultsGrid regions={regions} />)
  .add("Without results", () => <ResultsGrid regions={regionsWithoutData} />)
  .add("Loading", () => <ResultsGrid regions={regionsLoading} />);

// storiesOf('Layout', module)
//   .addDecorator(withProvider)
//   .add('Home', () => )
