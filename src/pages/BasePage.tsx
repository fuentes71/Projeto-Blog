import { Box } from "@mui/material";
import { FC, ReactNode, ReactElement } from "react";

import { Nav } from "../shared/components";

export const BasePage: FC<{ page: ReactNode }> = ({ page }): ReactElement => {
    return (
        <>
            <Box>
                {page === "<Users />" ? <></> : <Nav />}
                {page}
            </Box>
        </>
    );
};
