import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Box, Flex } from "rebass";
import { Input, Label } from "@rebass/forms";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Fieldset from "../components/fieldset";
import Button from "../components/button";
import { handleSubmit } from "../components/utils";

function Form({ setRegions, regions, domain }) {
  console.log("domain", domain);
  const [domainInfo, setDomainInfo] = useState({
    domain,
    dnsServer: "8.8.8.8",
    shareUrl: "",
    copied: false
  });

  const [isDisabled, setDisabled] = useState(false);

  const updateState = newObj => {
    return Object.assign({}, domainInfo, newObj);
  };

  useEffect(() => {
    if (domain) {
      handleSubmit(null, regions, setRegions, domainInfo, setDisabled);
      setDomainInfo(
        updateState({ shareUrl: `https://dnscheck.app/${domainInfo.domain}` })
      );
    }
  }, []);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          setDisabled(true);
          handleSubmit(e, regions, setRegions, domainInfo, setDisabled);
          setDomainInfo(
            updateState({
              shareUrl: `https://dnscheck.app/${domainInfo.domain}`
            })
          );
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
              setDomainInfo(updateState({ domain: e.target.value }))
            }
            onChange={e =>
              setDomainInfo(updateState({ domain: e.target.value }))
            }
            onFocus={e => {
              e.preventDefault();
              if (domain) {
                Router.push("/");
              }
            }}
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
              setDomainInfo(updateState({ dnsServer: e.target.value }))
            }
            onChange={e =>
              setDomainInfo(updateState({ dnsServer: e.target.value }))
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
      {domainInfo.shareUrl && (
        <Box mt={4}>
          <Label htmlFor="share-url">Share URL</Label>
          <Input
            id="share-url"
            name="share-url"
            defaultValue={domainInfo.shareUrl}
            mb={3}
            color="primary"
            disabled
          />

          <CopyToClipboard
            text={domainInfo.shareUrl}
            onCopy={() => {
              setDomainInfo(updateState({ copied: true }));
              console.log("copied!");
            }}
          >
            <Button>{domainInfo.copied ? "Copied!" : "Copy URL"}</Button>
          </CopyToClipboard>
        </Box>
      )}
    </>
  );
}

export default Form;
