import React from "react";
import { Button } from "rebass";

export default function(props) {
  return <Button {...props}>{props.children}</Button>;
}
