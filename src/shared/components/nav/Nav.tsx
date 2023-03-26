import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Container, useTheme, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAppThemeContext } from "../../contexts/ThemeContext";
import { NavProps } from "../../types";

export const Nav: FC = (): ReactElement => {
    const { themeName, toggleTheme } = useAppThemeContext();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    const [routes] = useState<NavProps[]>([
        { nav: "Home", to: "/" },
        { nav: "Users", to: "/users" },
    ]);
    return (
        <>
            <Box position="fixed" bgcolor={theme.palette.primary.dark} zIndex="999" width="100%">
                <Container maxWidth="md">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container ml={mdDown ? 12 : 0}>
                                {routes.map((el) => (
                                    <Grid item margin={2} key={el.nav}>
                                        <NavLink style={{ textDecoration: "none" }} to={el.to}>
                                            <Typography color="white">{el.nav}</Typography>
                                        </NavLink>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button
                                style={{
                                    color: theme.palette.primary.contrastText,
                                }}
                                onClick={toggleTheme}
                            >
                                {themeName === "Light" ? <DarkModeIcon /> : <LightModeIcon />}
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Nav;
