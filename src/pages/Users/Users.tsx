import { Grid } from "@mui/material";
import React from "react";

import { User } from "./User";
import { UserList } from "./UserList";

export const Users: React.FC = () => {
    return (
        <>
            <Grid container xl={12} height="95.8vh ">
                <Grid item sm={3} sx={{ boxShadow: 4 }}>
                    <UserList />
                </Grid>
                <Grid item sm={9}>
                    <User />
                </Grid>
            </Grid>
        </>
    );
};
