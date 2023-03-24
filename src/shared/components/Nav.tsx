import { Box, Container, Grid, Typography } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";

import { NavProps } from "../types";

const Nav: FC = (): ReactElement => {
    const [routes] = useState<NavProps[]>([
        { nav: "Home", to: "/" },
        { nav: "Users", to: "/users" },
    ]);
    return (
        <>
            <Box component="nav" bgcolor="#DA8816" borderColor="black" width="100%">
                <Container fixed>
                    <Grid container justifyContent="center">
                        {routes.map((el) => (
                            <Grid item margin="8px " key={el.nav}>
                                <NavLink style={{ textDecoration: "none" }} to={el.to}>
                                    <Typography color="white">{el.nav}</Typography>
                                </NavLink>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Nav;
