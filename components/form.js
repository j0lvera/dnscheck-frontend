import React, { useState } from "react";
import Loading from "react-loading";
import { Input, Label } from "@rebass/forms";
import Fieldset from "../components/fieldset";
import Button from "../components/button";
import { handleSubmit } from "../components/utils";
import theme from "../theme";

function Form({ setRegions, regions }) {
  const [domainInfo, setDomainInfo] = useState({
    domain: "",
    dnsServer: "8.8.8.8"
  });

  const [isDisabled, setDisabled] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setDisabled(true);
        handleSubmit(e, regions, setRegions, domainInfo, setDisabled);
      }}
    >
      <Fieldset mb={3}>
        <Label htmlFor="domain">Domain</Label>
        <Input
          id="domain"
          name="domain"
          placeholder="jolvera.dev"
          defaultValue={domainInfo.domain}
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
          sx={{ "&:focus": { bg: "muted" } }}
          required
        />
      </Fieldset>

      <Fieldset mb={3}>
        <Label htmlFor="dns_server">DNS Server</Label>
        <Input
          id="dns_server"
          name="dns_server"
          defaultValue={domainInfo.dnsServer}
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
          sx={{ "&:focus": { bg: "muted" } }}
          required
        />
      </Fieldset>

      <Button
        type="submit"
        aria-label={`Check DNS of ${domainInfo.domain}`}
        disabled={isDisabled}
      >
        Check DNS
      </Button>
    </form>
  );
}

export default Form;
