/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { useState } from "react";
import regionArr from "../regions";
import axios from "axios";
import qs from "qs";

const Home = () => {
  const [domain, setDomain] = useState("");
  const [regions, setRegions] = useState(regionArr);

  async function handleSubmit(event) {
    event.preventDefault();

    regions.forEach(async ({ id }) => {
      setRegions(currentRegions =>
        currentRegions.map(region => {
          console.log(region.id === id);
          if (region.id === id) {
            console.log(`setting ${id} loading to true`);
            return {
              ...region,
              loading: true
            };
          }

          return region;
        })
      );

      try {
        const response = await axios({
          url: `https://${id}-dnscheck.now.sh`,
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          data: qs.stringify({ domain })
        });

        if (response.statusText == "OK") {
          console.log(`${id}:`, response.data.data);
          setRegions(currentRegions =>
            currentRegions.map(region => {
              if (region.id === id) {
                return {
                  ...region,
                  loading: false,
                  data: response.data.data
                };
              }

              return region;
            })
          );
        }
      } catch (err) {
        console.log("err!", err);
      }
    });
  }

  return (
    <>
      <Container>
        <form sx={{ mx: "auto", maxWidth: "25em" }} onSubmit={handleSubmit}>
          <label htmlFor="domain" />
          <input
            sx={{
              backgroundColor: "muted",
              p: 2,
              color: "text",
              border: 0,
              width: "100%"
            }}
            type="text"
            name="domain"
            placeholder="jolvera.dev"
            autoComplete="false"
            required
            onKeyDown={e => setDomain(e.target.value)}
            onChange={e => setDomain(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </Container>

      <Container sx={{ mt: 4, maxWidth: "90%" }}>
        <Box
          sx={{
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"]
          }}
        >
          {regions.map((region, index) => (
            <Box key={index}>
              <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
                <span sx={{ fontSize: 4, mr: 2 }}>{region.flag}</span>{" "}
                {region.location} {region.loading && "(loading...)"}
              </Flex>
              <ul>
                {region.data &&
                  region.data.length &&
                  region.data.map((r, idx) => {
                    return (
                      <li key={idx}>
                        {r.record}: {r.value}
                      </li>
                    );
                  })}
              </ul>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
