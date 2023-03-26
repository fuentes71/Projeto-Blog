import PersonIcon from "@mui/icons-material/Person";
import { List, Divider, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { CommentsProps } from "../../shared/types";

export const ListComments: FC<CommentsProps> = ({ id, name, email, body }): ReactElement => {
    return (
        <>
            <List
                sx={{
                    width: "100%",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Link to={`/users/${id}`}>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </Link>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body1"
                                color="text.primary"
                            >
                                - {name}
                            </Typography>
                        }
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="caption"
                                    color="text.primary"
                                >
                                    {email}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
                <Box margin="0 2vh">
                    <Typography component="span" variant="body1">
                        {body}
                    </Typography>
                </Box>
                <Divider variant="middle" />
            </List>
        </>
    );
};
