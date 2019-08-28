import { Box } from "rebass";
import React from "react";
import { useState } from "react";
import regionArr from "../regions";
import Form from "../components/form";
import ResultsGrid from "../components/results-grid";
import { Container } from "../components/layout";

const Home = () => {
  const [regions, setRegions] = useState(regionArr);

  return (
    <>
      <Box width={0} mx="auto">
        <Container>
          <Form setRegions={setRegions} regions={regions} />
        </Container>
      </Box>

      <Box width={3} mx="auto" py={4}>
        <ResultsGrid regions={regions} />
      </Box>
    </>
  );
};

export default Home;
