import { Box, Flex } from "rebass";
import React from "react";
import { useState } from "react";
import regionArr from "../regions";
import axios from "axios";
import qs from "qs";
import Loading from "react-loading";
import Table from "../components/table";
import Form from "../components/form";

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

async function handleSubmit(event, regions) {
  event.preventDefault();

  regions.forEach(async ({ id }) => {
    props.setRegions(currentRegions =>
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
        props.setRegions(currentRegions =>
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
      props.setRegions(currentRegions =>
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

const Home = () => {
  const [regions, setRegions] = useState(regionArr);

  return (
    <>
      <Box>
        <Form
          setRegions={setRegions}
          regions={regions}
          handleSubmit={handleSubmit}
        />
      </Box>

      <Box sx={{ mt: 4, maxWidth: "95%" }}>
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
      </Box>
    </>
  );
};

export default Home;
