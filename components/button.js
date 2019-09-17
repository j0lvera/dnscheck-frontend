import React from "react";
import { Button, Text } from "rebass";
import { FaSpinner } from "react-icons/fa";
import css from "./spin.css";

export default function(props) {
  return (
    <Button {...props}>
      {props.loading ? (
        <>
          <FaSpinner className={css.spin} />
          <Text as="span" ml={2}>
            {props.children}
          </Text>
        </>
      ) : (
        props.children
      )}
    </Button>
  );
}
