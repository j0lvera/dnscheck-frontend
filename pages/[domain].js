import { Box } from "rebass";
import React from "react";
import { useState } from "react";
import regionArr from "../regions";
import Form from "../components/form";
import ResultsGrid from "../components/results-grid";
import { Container } from "../components/layout";

const DomainRoute = ({ domain }) => {
  const [regions, setRegions] = useState(regionArr);

  return (
    <>
      <Box maxWidth={0} mx="auto" px={[3, 0]}>
        <Container>
          <Form setRegions={setRegions} regions={regions} domain={domain} />
        </Container>
      </Box>

      <Box width={3} mx="auto" mt={3} py={4}>
        <ResultsGrid regions={regions} />
      </Box>
    </>
  );
};

DomainRoute.getInitialProps = async ctx => {
  const { domain } = ctx.query;

  return { domain };
};

export default DomainRoute;
