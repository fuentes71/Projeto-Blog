import { Grid, useTheme, Box, useMediaQuery } from "@mui/material";
import { FC, ReactElement } from "react";

import { User } from "./User";
import { UserList } from "./UserList";

export const Users: FC = (): ReactElement => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Box width="100%" height="100vh">
                <Grid container direction="row" xs={12} height="100%">
                    <Grid item xs={mdDown ? 0 : 2.5}>
                        <UserList />
                    </Grid>
                    <Grid
                        item
                        xs={mdDown ? 12 : 9.5}
                        marginTop={mdDown ? theme.spacing(5) : theme.spacing(8)}
                    >
                        <User />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
