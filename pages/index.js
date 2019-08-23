/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { useState } from "react";
import regionArr from "../regions";
import axios from "axios";
import qs from "qs";
import Loading from "react-loading";
import Fieldset from "../components/fieldset";
import Input from "../components/input";
import Button from "../components/button";
import Table from "../components/table";

const ListItem = ({ children }) => (
  <li
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {children}
  </li>
);

const Home = () => {
  const [domainInfo, setDomainInfo] = useState({
    domain: "",
    dnsServer: "8.8.8.8"
  });
  const [regions, setRegions] = useState(regionArr);

  async function handleSubmit(event) {
    event.preventDefault();

    regions.forEach(async ({ id }) => {
      setRegions(currentRegions =>
        currentRegions.map(region => {
          if (region.id === id) {
            return {
              ...region,
              loading: true,
              error: ""
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
          data: qs.stringify({
            domain: domainInfo.domain,
            dns_server: domainInfo.dnsServer
          })
        });

        if (response.status === 200) {
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
        console.log("err!", err.response.data.message);
        setRegions(currentRegions =>
          currentRegions.map(region => {
            if (region.id === id) {
              return {
                ...region,
                loading: false,
                error: err.response.data.message
              };
            }

            return region;
          })
        );
      }
    });
  }

  return (
    <>
      <Container>
        <form sx={{ mx: "auto", maxWidth: "25em" }} onSubmit={handleSubmit}>
          <Fieldset>
            <label htmlFor="dns_server">DNS Server</label>
            <Input
              type="text"
              name="dns_server"
              value={domainInfo.dnsServer}
              required
              onKeyDown={e =>
                setDomainInfo(
                  Object.assign({}, domainInfo, { dnsServer: e.target.value })
                )
              }
              onChange={e =>
                setDomainInfo(
                  Object.assign({}, domainInfo, { dnsServer: e.target.value })
                )
              }
            />
          </Fieldset>

          <Fieldset>
            <label htmlFor="domain">Domain</label>
            <Input
              type="text"
              name="domain"
              placeholder="jolvera.dev"
              autoComplete="false"
              value={domainInfo.domain}
              required
              onKeyDown={e =>
                setDomainInfo(
                  Object.assign({}, domainInfo, { domain: e.target.value })
                )
              }
              onChange={e =>
                setDomainInfo(
                  Object.assign({}, domainInfo, { domain: e.target.value })
                )
              }
            />
          </Fieldset>

          <Button
            type="submit"
            aria-label={`Check DNS of ${domainInfo.domain}`}
          >
            Check DNS
          </Button>
        </form>
      </Container>

      <Container sx={{ mt: 4, maxWidth: "95%" }}>
        <Box
          sx={{
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)"
            ]
          }}
        >
          {regions.map((region, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                bg: "muted"
              }}
            >
              <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
                <span sx={{ fontSize: 4, mr: 2 }}>{region.flag}</span>{" "}
                {region.location}
              </Flex>
              {region.error && (
                <Box sx={{ p: 3, my: 3, bg: "brown", textAlign: "center" }}>
                  {region.error}
                </Box>
              )}
              <ul sx={{ listStyle: "none", pl: 0, ml: 0 }}>
                {region.loading && (
                  <ListItem>
                    <Loading type="bubbles" />
                  </ListItem>
                )}
                {region.data.length > 0 && (
                  <Table key={index} records={region.data} />
                )}
              </ul>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
