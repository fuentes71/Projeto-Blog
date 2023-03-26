import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
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
    useMediaQuery,
    useTheme,
    ButtonBase,
} from "@mui/material";
import { useState, ReactElement, FC } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { DrawerMenu } from "../../shared/components/drawer/DrawerMenu";
import { api } from "../../shared/server/api/api";

export const UserList: FC = (): ReactElement => {
    const { data, isFetching } = useQuery("users", api.getUsers, { staleTime: 1000 * 60 });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            {mdDown ? (
                <Box position="absolute" zIndex="9999" mt={1.6} ml={1}>
                    <ButtonBase onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <MenuOpenIcon /> : <MenuIcon sx={{ color: "white" }} />}
                    </ButtonBase>
                </Box>
            ) : (
                <></>
            )}
            <DrawerMenu open={isOpen}>
                <List subheader={<li />}>
                    {data?.map((user) => (
                        <Box key={user.id}>
                            <ListItem>
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        width: "100%",
                                    }}
                                    to={`${user.id}`}
                                    onClick={() => setIsOpen(!isOpen)}
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
            </DrawerMenu>
        </>
    );
};
