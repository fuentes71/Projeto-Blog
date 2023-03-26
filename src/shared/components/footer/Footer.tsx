import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React, { ReactElement } from "react";

export const Footer: React.FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "primary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            Wireless Tech Lab
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Box>
                            <Link
                                target="_blank"
                                color="textSecondary"
                                href="https://github.com/fuentes71"
                                underline="hover"
                            >
                                <GitHubIcon />
                            </Link>

                            <Link
                                target="_blank"
                                color="textSecondary"
                                href="https://www.linkedin.com/in/matheus-fuentes-04b74b210/"
                                underline="hover"
                            >
                                <LinkedInIcon />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            paddingTop: "1rem",
                            paddingBottom: "1rem",
                        }}
                    >
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router | React Query | Axios`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="caption">
                            {`© ${new Date().getFullYear()} Copyright: `}
                            <Link color="textSecondary" href="mailto:Matheus.fu.p@hotmail.com">
                                Matheus.fu.p@hotmail.com
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
