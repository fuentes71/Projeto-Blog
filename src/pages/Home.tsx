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
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

import { queryClient } from "../shared/server/api/queryClient";
import { PostProps } from "../shared/types";

const Home: React.FC = () => {
    const { data, isFetching, isError, error } = useQuery<PostProps[]>({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data;
        },

        staleTime: 1000 * 60,
        initialDataUpdatedAt: () => queryClient.getQueryState(["posts"])?.dataUpdatedAt,
    });

    return (
        <>
            {isFetching && <Typography>Carregando...</Typography>}
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {data?.map((post) => (
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
        </>
    );
};

export default Home;
