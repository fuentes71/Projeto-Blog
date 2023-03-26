import {
    Box,
    Container,
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    useTheme,
    Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { ItemList } from "../../shared/components";
import { api } from "../../shared/server/api/api";

export function User() {
    const theme = useTheme();
    const params = useParams();
    const currentUser = params["*"] as unknown as string;
    const { data } = useQuery("users", api.getUsers);

    const user = data?.length
        ? data?.filter((user) =>
              user.id === Number(currentUser) ? user.id.toString().includes(currentUser) : "",
          )
        : null;

    return (
        <>
            <Box width="100%" height="100% ">
                <Container fixed>
                    {user?.length ? (
                        <List
                            sx={{
                                marginLeft: "auto",
                                position: "fixed",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={user[0].name} src={user[0].name} />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ maxWidth: 300 }}
                                    primary={
                                        <Typography component="h1" fontSize="2rem">
                                            {user[0].username}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {user[0].name}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider variant="middle" component="li" />
                            <Grid container direction="row" xs={12} mt={theme.spacing(2)}>
                                <Grid item xs={6}>
                                    <ItemList text={`E-mail: ${user[0].email}`} />
                                    <ItemList text={`Phone: ${user[0].phone}`} />
                                    <Divider variant="middle" />
                                    <ItemList text={`City: ${user[0].address?.city}`} />
                                    <ItemList text={`Street: ${user[0].address?.street}`} />
                                    <ItemList text={`Zip code: ${user[0].address?.zipcode}`} />
                                    <Divider variant="middle" />
                                </Grid>
                                <Grid item xs={6}>
                                    <ItemList text={`Web Site: ${user[0].website}`} />
                                    <ItemList text={`Company: ${user[0].company?.name}`} />
                                    <Divider variant="middle" />
                                    <ItemList
                                        text={`Catch Phrase: ${user[0].company?.catchPhrase}`}
                                    />
                                    <ItemList text={`BS: ${user[0].company?.bs}`} />
                                    <Divider variant="middle" />
                                </Grid>
                            </Grid>
                        </List>
                    ) : (
                        <></>
                    )}
                </Container>
            </Box>
        </>
    );
}
