/** @jsx jsx */
import { jsx } from "theme-ui";

function Button({ children }) {
  return (
    <button
      sx={{
        display: "block",
        width: "100%",
        border: 0,
        bg: "primary",
        p: 2,
        color: "bg",
        fontWeight: "bold",
        "&:hover": {
          bg: "secondary"
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
