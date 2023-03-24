import {
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Skeleton,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { ItemList } from "../../shared/components";
import { api } from "../../shared/server/api/api";

export function User() {
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const currentUser = params["*"] as unknown as string;
    const { data } = useQuery("users", api.getUsers);

    const user = data?.length
        ? data?.filter((user) =>
              user.id === Number(currentUser) ? user.id.toString().includes(currentUser) : "",
          )
        : null;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [currentUser]);
    return (
        <>
            {user?.length ? (
                <List
                    sx={{
                        width: "auto",
                        margin: "24px",
                        position: "fixed",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            {loading ? (
                                <Skeleton variant="circular" width={40} height={40} />
                            ) : (
                                <Avatar alt={user[0].name} src={user[0].name} />
                            )}
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ maxWidth: 300 }}
                            primary={
                                loading ? (
                                    <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                                ) : (
                                    <>
                                        <Typography component="h1" fontSize="2rem">
                                            {user[0].username}
                                        </Typography>
                                    </>
                                )
                            }
                            secondary={
                                loading ? (
                                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                                ) : (
                                    <>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {user[0].name}
                                        </Typography>
                                    </>
                                )
                            }
                        />
                    </ListItem>
                    <Divider variant="middle" component="li" />
                    <Grid container sm={12} m={3}>
                        <Grid item sm={6}>
                            <ItemList loading={loading} text={`E-mail: ${user[0].email}`} />
                            <ItemList loading={loading} text={`Phone: ${user[0].phone}`} />
                            <Divider variant="middle" />
                            <ItemList loading={loading} text={`City: ${user[0].address?.city}`} />
                            <ItemList
                                loading={loading}
                                text={`Street: ${user[0].address?.street}`}
                            />
                            <ItemList
                                loading={loading}
                                text={`Zip code: ${user[0].address?.zipcode}`}
                            />
                            <Divider variant="middle" />
                        </Grid>
                        <Grid item sm={6}>
                            <ItemList loading={loading} text={`Web Site: ${user[0].website}`} />
                            <ItemList
                                loading={loading}
                                text={`Company: ${user[0].company?.name}`}
                            />
                            <Divider variant="middle" />
                            <ItemList
                                loading={loading}
                                text={`Catch Phrase: ${user[0].company?.catchPhrase}`}
                            />
                            <ItemList loading={loading} text={`BS: ${user[0].company?.bs}`} />
                            <Divider variant="middle" />
                        </Grid>
                    </Grid>
                </List>
            ) : (
                <></>
            )}
        </>
    );
}
