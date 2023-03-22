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
import { useQuery } from "react-query";

import { api } from "../../shared/server/api/api";

const Users: React.FC = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: api.getUsers,
        staleTime: 1000 * 60,
    });

    return (
        <>
            <Grid item sm={3}>
                {isFetching && <Typography>Carregando...</Typography>}
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                    {data?.map((user) => (
                        <>
                            <ListItem key={user.id} alignItems="flex-start">
                                <ListItemButton onClick={() => console.log(user)}>
                                    <ListItemAvatar>
                                        <Avatar alt={user.username.toString()} />
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={user.username}
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {user.name} -{" "}
                                                </Typography>
                                                {user.email}
                                            </>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    ))}
                </List>
            </Grid>
        </>
    );
};

export default Users;
