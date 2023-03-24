import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Skeleton,
    Typography,
} from "@mui/material";
import { FC, ReactElement } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { Footer } from "../shared/components/Footer";
import { api } from "../shared/server/api/api";

export const Home: FC = (): ReactElement => {
    const { data: posts, isFetching } = useQuery("posts", api.getPost, {
        staleTime: 1000 * 60,
    });
    const { data: users } = useQuery("users", api.getUsers);

    const user = users?.length ? users?.map((user) => user.username) : [];

    return (
        <>
            {isFetching && <Typography>Carregando...</Typography>}
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {posts?.map((post) => (
                    <Grid
                        justifyContent="center"
                        alignItems="center"
                        key={post.id}
                        container
                        flexDirection={post.id % 2 === 0 ? "row" : "row-reverse"}
                    >
                        <Grid item sm={3}>
                            <Box component="div" p={2} alignItems="center" maxWidth={550}>
                                {isFetching ? (
                                    <Skeleton variant="rectangular" width="100%" height="100%" />
                                ) : (
                                    <Box
                                        component="img"
                                        width="100%"
                                        height="100%"
                                        src="https://source.unsplash.com/1600x900/?portrait"
                                        alt="img"
                                    />
                                )}
                            </Box>
                        </Grid>
                        <Grid item sm={3}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        isFetching ? (
                                            <>
                                                <Skeleton
                                                    variant="text"
                                                    sx={{ fontSize: "1rem" }}
                                                />
                                                <Divider variant="fullWidth" />
                                            </>
                                        ) : (
                                            <>
                                                <Typography component="p" variant="h4" m={4}>
                                                    {user[post.userId]}
                                                </Typography>
                                                <Divider variant="fullWidth" />
                                            </>
                                        )
                                    }
                                    secondary={
                                        isFetching ? (
                                            <>
                                                <Skeleton
                                                    variant="text"
                                                    sx={{ fontSize: "1rem" }}
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    sx={{ fontSize: "1rem" }}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <Typography
                                                    sx={{ display: "inline-block" }}
                                                    component="p"
                                                    variant="h5"
                                                    color="text.primary"
                                                    justifyContent="center"
                                                    m={2}
                                                >
                                                    {post.title}
                                                </Typography>
                                                <Typography
                                                    sx={{ display: "inline-block" }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {post.body}
                                                </Typography>
                                            </>
                                        )
                                    }
                                />
                            </ListItem>
                            <Box component="div" width="90%" alignItems="end">
                                <Box
                                    component="button"
                                    borderRadius="25px"
                                    border="1px"
                                    p="10px 15px"
                                    justifyContent="center"
                                    bgcolor="#DA8816"
                                    m={2}
                                >
                                    {isFetching ? (
                                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                                    ) : (
                                        <Link
                                            to={`${post.id}`}
                                            style={{
                                                textDecoration: "none",
                                                width: "100%",
                                            }}
                                        >
                                            <Typography color="white">Saiba mais</Typography>
                                        </Link>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </List>
            <Footer />
        </>
    );
};
