/** @jsx jsx */
import { jsx } from "theme-ui";

function Input(props) {
  return (
    <input
      {...props}
      sx={{
        backgroundColor: "muted",
        p: 2,
        color: "text",
        border: 0,
        width: "100%"
      }}
    />
  );
}

export default Input;
