import { ListItem, ListItemText, Skeleton, Typography } from "@mui/material";
import React from "react";

import { ItemListProps } from "../types";

export const ItemList: React.FC<ItemListProps> = ({ loading, text }) => {
    return (
        <>
            <ListItem sx={{ width: "auto", maxWidth: 300 }}>
                <ListItemText>
                    {loading ? (
                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    ) : (
                        <>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body1"
                                color="text.primary"
                            >
                                {text}
                            </Typography>
                        </>
                    )}
                </ListItemText>
            </ListItem>
        </>
    );
};
