/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled, Layout, Header, Main, Footer } from "theme-ui";
import { Global } from "@emotion/core";

export default function({ children }) {
  return (
    <Styled.root>
      <Layout>
        <Global
          styles={{
            "*": {
              boxSizing: "border-box"
            },
            body: {
              margin: 0
            }
          }}
        />
        <Header
          sx={{
            py: 4,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img src="https://icon.now.sh/public/50/BB99FF" alt="World icon" />

          <h1 sx={{ mb: 0 }}>DNS Check</h1>
        </Header>

        <Main>{children}</Main>

        <Footer sx={{ justifyContent: "center", py: 4 }}>
          <a href="https://jolvera.dev" sx={{ p: 2 }}>
            Juan Olvera
          </a>
          <a sx={{ p: 2 }} href="https://zeit.co">
            Hosted on Now
          </a>
          <a sx={{ p: 2 }} href="https://github.com/j0lv3r4/dnscheck">
            Source Code
          </a>
        </Footer>
      </Layout>
    </Styled.root>
  );
}
