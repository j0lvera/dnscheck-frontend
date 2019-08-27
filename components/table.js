function Table({ records }) {
  const Th = ({ children }) => (
    <th
    // sx={{
    //   p: 3,
    //   "&:first-of-type": {
    //     width: ["40%", "40%", "40%", "20%"]
    //   }
    // }}
    >
      {children}
    </th>
  );
  const Td = ({ children }) => <td sx={{ p: 3 }}>{children}</td>;

  return (
    records.length > 0 && (
      <table
      // sx={{
      //   mx: "auto",
      //   width: "100%",
      //   borderCollapse: "collapse",
      //   border: "1ps solid #333",
      //   wordBreak: "break-word"
      // }}
      >
        <thead //sx={{ textAlign: "left" }}
        >
          <tr>
            <Th>
              <p //sx={{ m: 0 }}
              >
                Type
              </p>
            </Th>
            <Th>
              <p //sx={{ m: 0 }}
              >
                Value
              </p>
            </Th>
          </tr>
        </thead>
        <tbody>
          {records.map(
            ({ record, value }, index) =>
              index != 0 && (
                <tr
                // sx={{
                //   bg: index % 2 ? "transparent" : "rgba(0,0,0,0.1)",
                //   p: 3
                // }}
                >
                  <Td>{record}</Td>
                  <Td>{value}</Td>
                </tr>
              )
          )}
        </tbody>
      </table>
    )
  );
}

export default Table;
