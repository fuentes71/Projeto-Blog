import {
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

import { User } from "./User";
import { UserList } from "./UserList";

export const Users: React.FC = () => {
    return (
        <>
            <Grid container xl={12} height="100vh">
                <Grid item sm={3}>
                    <UserList />
                </Grid>
                <Grid item sm={9} bgcolor="#333">
                    <User />
                </Grid>
            </Grid>
        </>
    );
};
