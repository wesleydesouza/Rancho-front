import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
  }
   
`;

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#0B1C35",
    gray100: "#F4F4F4",
    blue200: "#23B3F3",
    blue500: "#144DDE",
    blue600: "#1041bc",
    danger: "#D83933",
    warning: "#FFC700",
    info: "#2F80ED",
    success: "#34A853",
  },
} as const;
