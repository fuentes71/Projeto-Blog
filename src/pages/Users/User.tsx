import { Grid } from "@mui/material";
import React from "react";

import Users from "./Users";

export const User = () => {
    return (
        <>
            <Grid container sm={12} height="100vh">
                <Grid item sm={3}>
                    <Users />
                </Grid>
                <Grid item sm={9} bgcolor="#333">
                    teste
                </Grid>
            </Grid>
        </>
    );
};
