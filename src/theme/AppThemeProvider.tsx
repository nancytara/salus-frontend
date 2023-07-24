import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#dd8844",
    // },
    // secondary: {
    //   main: "#885453",
    // },
  },
});

type Props = {
  children: ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
