import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./theme";

export const AppTheme = ({ children }: any) => {
  return ( 
      <ThemeProvider theme={purpleTheme}>
        {children}
        <CssBaseline />
      </ThemeProvider> 
  );
};
