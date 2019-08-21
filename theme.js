import { deep } from "@theme-ui/presets";

export default {
  ...deep,
  fonts: {
    body:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    monospace: "Menlo, monospace"
  },

  styles: {
    ...deep,
    h1: {
      color: "text"
    },
    Layout: {
      bg: "background",
      color: "text",
      fontFamily: "body",
      a: {
        color: "primary",
        "&:hover": {
          color: "secondary"
        }
      }
    }
  }
};
