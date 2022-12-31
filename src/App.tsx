import { AppRoutes } from "./routes";
import { GlobalStyle, theme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
