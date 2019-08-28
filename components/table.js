import React from "react";
import { Box, Text } from "rebass";

function Table({ records }) {
  const Th = ({ children }) => (
    <Box
      as="th"
      sx={{
        p: 2,
        "&:first-of-type": {
          width: ["4em", "4em", "5em", "5em"]
        }
      }}
    >
      {children}
    </Box>
  );
  const Td = ({ children }) => (
    <Box as="td" sx={{ p: 2 }}>
      {children}
    </Box>
  );

  return (
    records.length > 0 && (
      <Box
        as="table"
        sx={{
          mx: "auto",
          width: "100%",
          borderCollapse: "collapse",
          border: "1ps solid #fff",
          wordBreak: "break-word"
        }}
      >
        <Box as="thead" sx={{ textAlign: "left" }}>
          <tr>
            <Th>
              <Text sx={{ m: 0 }}>Type</Text>
            </Th>
            <Th>
              <Text sx={{ m: 0 }}>Value</Text>
            </Th>
          </tr>
        </Box>
        <tbody>
          {records.map(
            ({ record, value }, index) =>
              index != 0 && (
                <Box
                  key={index}
                  as="tr"
                  sx={{
                    bg: index % 2 ? "transparent" : "rgba(0,0,0,0.1)",
                    p: 3
                  }}
                >
                  <Td>{record}</Td>
                  <Td>{value}</Td>
                </Box>
              )
          )}
        </tbody>
      </Box>
    )
  );
}

export default Table;
