import { createTheme } from "@mui/material";
import { amber, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: amber[700],
            dark: amber[800],
            light: amber[400],
            contrastText: "#ffffff",
        },
        secondary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: "#ffffff",
        },
        background: {
            default: "#f6f6f6",
            paper: "#ffffff",
        },
    },
});
