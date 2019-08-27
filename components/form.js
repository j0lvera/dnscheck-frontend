/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Fieldset from "../components/fieldset";
import Input from "../components/input";
import Button from "../components/button";

function Form({ handleSubmit, regions }) {
  const [domainInfo, setDomainInfo] = useState({
    domain: "",
    dnsServer: "8.8.8.8"
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e, regions);
      }}
    >
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

      <Button type="submit" aria-label={`Check DNS of ${domainInfo.domain}`}>
        Check DNS
      </Button>
    </form>
  );
}

export default Form;
