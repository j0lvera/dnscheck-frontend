export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: ["30em", "45em", "65em", "90%", "100%"],
  colors: {
    text: "hsl(210, 50%, 96%)",
    background: "hsl(230, 25%, 18%)",
    primary: "hsl(260, 100%, 80%)",
    secondary: "hsl(290, 100%, 80%)",
    highlight: "hsl(260, 20%, 40%)",
    purple: "hsl(290, 100%, 80%)",
    muted: "hsla(230, 20%, 0%, 20%)",
    gray: "hsl(210, 50%, 60%)"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  variants: {},
  text: {},
  link: {
    color: "primary",
    "&:hover": {
      color: "secondary"
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      fontWeight: "heading",
      "&:hover, &:active, &:focus": {
        bg: "secondary",
        cursor: "pointer",
        textDecoration: "underline"
      },
      "&:disabled": {
        bg: "muted",
        color: "text",
        textDecoration: "line-through"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }
  }
};
