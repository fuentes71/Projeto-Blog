import { Drawer, Box, useTheme, useMediaQuery } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";

export const DrawerMenu: FC<{ children: ReactNode; open: boolean }> = ({
    children,
    open,
}): ReactElement => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Box position="fixed">
                <Drawer
                    open={open}
                    variant={mdDown ? "temporary" : "permanent"}
                    sx={{ overflow: "scroll" }}
                >
                    <Box width="100%" sx={{ marginTop: mdDown ? 0 : theme.spacing(5) }}>
                        {children}
                    </Box>
                </Drawer>
            </Box>
        </>
    );
};
