import { ThemeProvider, Box } from "@mui/material";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState, FC } from "react";

import { DarkThemer, LightTheme } from "../thermes";
import { ThemeContextDataProps } from "../types";

const ThemeContext = createContext({} as ThemeContextDataProps);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};
export const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<"Light" | "Dark">("Light");

    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) => (oldThemeName === "Light" ? "Dark" : "Light"));
    }, []);
    const theme = useMemo(() => {
        if (themeName === "Light") {
            return LightTheme;
        }
        return DarkThemer;
    }, [themeName]);
    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100%" height="100%" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
