/** @jsx jsx */
import { jsx } from "theme-ui";

function Fieldset({ children }) {
  return (
    <fieldset
      sx={{
        border: 0,
        p: 0,
        mb: 3
      }}
    >
      {children}
    </fieldset>
  );
}

export default Fieldset;
