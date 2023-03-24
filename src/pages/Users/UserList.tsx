import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Skeleton,
    Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { api } from "../../shared/server/api/api";

export const UserList: React.FC = () => {
    const { data, isFetching } = useQuery("users", api.getUsers, { staleTime: 1000 * 60 });

    return (
        <>
            <List
                sx={{
                    "& ul": { padding: 0 },
                }}
                subheader={<li />}
            >
                {data?.map((user) => (
                    <Box width="100%" key={user.id}>
                        <ListItem alignItems="flex-start">
                            <Link
                                style={{
                                    textDecoration: "none",
                                    width: "100%",
                                }}
                                to={`${user.id}`}
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        {isFetching ? (
                                            <>
                                                <Skeleton
                                                    variant="circular"
                                                    width={40}
                                                    height={40}
                                                />
                                            </>
                                        ) : (
                                            <Avatar
                                                alt={user.name}
                                                src="https://generated.photos/face-generator"
                                            />
                                        )}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            isFetching ? (
                                                <>
                                                    <Skeleton
                                                        variant="text"
                                                        sx={{ fontSize: "1rem" }}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <Typography
                                                        sx={{ display: "inline" }}
                                                        component="span"
                                                        variant="body1"
                                                        color="text.primary"
                                                    >
                                                        {user.username}
                                                    </Typography>
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
                                                </>
                                            ) : (
                                                <>
                                                    <Typography
                                                        sx={{ display: "inline" }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {user.name}
                                                    </Typography>
                                                </>
                                            )
                                        }
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider variant="fullWidth" component="li" />
                    </Box>
                ))}
            </List>
        </>
    );
};
