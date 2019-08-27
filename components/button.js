/** @jsx jsx */
import { jsx } from "theme-ui";

function Button({ children }) {
  return (
    <button
      sx={{
        border: 0,
        bg: "primary",
        p: 2,
        color: "bg",
        fontWeight: "bold",
        "&:hover": {
          bg: "secondary",
          cursor: "pointer"
        },
        "&:focus,&:active": {
          bg: "yellow",
          cursor: "pointer"
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
