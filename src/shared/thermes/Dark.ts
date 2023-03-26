import { createTheme } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";

export const DarkThemer = createTheme({
    palette: {
        primary: {
            main: indigo[800],
            dark: indigo[900],
            light: indigo[500],
            contrastText: "#ffffff",
        },
        secondary: {
            main: blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: "#ffffff",
        },
        background: {
            default: "#303134",
            paper: "#222222",
        },
    },
});
