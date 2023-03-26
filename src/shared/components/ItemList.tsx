import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import { ItemListProps } from "../types";

export const ItemList: React.FC<ItemListProps> = ({ text }) => {
    return (
        <>
            <ListItem sx={{ width: "auto", maxWidth: 300 }}>
                <ListItemText>
                    <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                    >
                        {text}
                    </Typography>
                </ListItemText>
            </ListItem>
        </>
    );
};
