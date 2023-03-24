import { Box } from "@mui/material";
import React from "react";

import { Nav } from "../shared/components";

export const PageBase: React.FC<{ page: React.ReactNode }> = ({ page }) => {
    return (
        <>
            <Box height="100vh">
                <Nav />
                {page}
            </Box>
        </>
    );
};
