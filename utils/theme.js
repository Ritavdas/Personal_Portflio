import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundation";

const config = {
  cssVarPrefix: "Ritav",
};

export const theme = extendTheme({
  config,
  ...foundations,
  styles: {
    global: {
      "html, body": {
        color: "whiteAlpha.700",
        bg: "black.500",
        fontSize: "md",
        lineHeight: "base",
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none",
      },
      "a:focus-visible": {
        outline: "2px solid",
        outlineColor: "purple.500",
        outlineOffset: "2px",
        borderRadius: "2px",
      },
      "button:focus-visible": {
        outline: "2px solid",
        outlineColor: "purple.500",
        outlineOffset: "2px",
      },
      a: {
        color: "whiteAlpha.600",
        transition: "all 0.2s ease",
      },
      "a:hover": {
        color: "blue.500",
        textDecoration: "none",
      },
      strong: {
        fontWeight: "600",
        color: "purple.500",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "600",
        color: "white.500",
        lineHeight: "short",
      },
      sizes: {
        lg: {
          fontSize: "lg",
          fontWeight: "600",
        },
        md: {
          fontSize: "xl",
          fontWeight: "600",
        },
        sm: {
          fontSize: "md",
          fontWeight: "600",
        },
      },
    },
  },
});
