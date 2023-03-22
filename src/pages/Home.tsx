import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

import { api } from "../shared/server/api/api";
import { queryClient } from "../shared/server/api/queryClient";
import { PostProps } from "../shared/types";

const Home: React.FC = () => {
    const { data: posts, isFetching } = useQuery({
        queryKey: ["posts"],
        queryFn: api.getPost,
        staleTime: 1000 * 60,
        initialDataUpdatedAt: () => queryClient.getQueryState(["posts"])?.dataUpdatedAt,
    });
    const { data: users } = useQuery({
        queryKey: ["users"],
        queryFn: api.getUsers,
        staleTime: 1000 * 60,
    });

    return (
        <>
            <Box>
                {isFetching && <Typography>Carregando...</Typography>}
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                    {posts?.map((post) => (
                        <li key={post.id}>
                            <ListItem key={post.id} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={post.userId.toString()} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={post.userId}
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {post.title} -{" "}
                                            </Typography>
                                            {post.body}
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </li>
                    ))}
                </List>
            </Box>
        </>
    );
};

export default Home;
