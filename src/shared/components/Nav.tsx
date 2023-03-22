import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { NavProps } from "../types";

const Nav = () => {
    const [routes] = useState<NavProps[]>([
        { nav: "Home", to: "/" },
        { nav: "Users", to: "/users" },
    ]);
    return (
        <>
            <Box
                component="nav"
                position="fixed"
                left="calc( 50vw - 10vw)"
                bottom="2vh"
                bgcolor="#DA8816"
                borderRadius="25px"
                borderColor="black"
                width="20vw"
            >
                <Grid container justifyContent="center">
                    {routes.map((el) => (
                        <Grid item margin="8px 16px" key={el.nav}>
                            <NavLink style={{ textDecoration: "none" }} to={el.to}>
                                <Typography color="white">{el.nav}</Typography>
                            </NavLink>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Nav;
