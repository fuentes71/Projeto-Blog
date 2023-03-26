import { Grid, Box, Divider, Typography, InputBase, Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { Footer } from "../../shared/components/footer/Footer";
import { api } from "../../shared/server/api/api";
import { ListComments } from "./ListComments";

export const Article: React.FC = () => {
    const [comment, setComment] = useState<string>("");
    const [publish, setPublish] = useState<boolean>(false);
    const params = useParams();
    const currentUser = params["*"] as unknown as string;
    const { data } = useQuery("posts", api.getPost);
    const { data: comments } = useQuery("comments", () => api.getComments(currentUser));
    const post = data?.filter((post) =>
        post.id === Number(currentUser) ? post.id.toString().includes(currentUser) : false,
    );
    useEffect(() => {
        if (comment.length > 5) {
            setPublish(true);
        } else {
            setPublish(false);
        }
    }, [comment]);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validaçoes para adicionar comentario a api..

        setComment("");
    };
    return (
        <>
            <Box width="100%">
                <Container fixed>
                    <Grid container justifyContent="center" xs={12}>
                        <Grid item xs={12} xl={5} maxWidth={550} m={2}>
                            <Box
                                component="img"
                                width="100%"
                                src="https://picsum.photos/3000"
                                alt="imagem randomica"
                                style={{
                                    margin: "64px auto",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} xl={5} mt={8} alignItems="center">
                            {post?.map((el) => (
                                <Box key={el.id}>
                                    <Typography component="h1" letterSpacing={2} variant="h4" m={4}>
                                        - {el.title}
                                    </Typography>
                                    <Typography component="p" variant="body1">
                                        {el.body}
                                        {el.body}
                                        {el.body}
                                        {el.body}
                                    </Typography>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={10} justifyContent="center" pt={8}>
                            <Box component="div">
                                <Typography component="p" variant="body2" fontFamily="cursive">
                                    {comments?.length} Comentarios
                                </Typography>
                                <Divider variant="middle" />
                                <Box
                                    onSubmit={(ev: React.FormEvent<HTMLFormElement>) =>
                                        handleSubmit(ev)
                                    }
                                    component="form"
                                    sx={{
                                        "& > :not(style)": { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <InputBase
                                        fullWidth
                                        value={comment}
                                        onChange={({ target }) => setComment(target.value)}
                                        sx={{ m: 2, flex: 1 }}
                                        placeholder="Escreva um comentario..."
                                    />
                                    <Box width="100%" justifyContent="end">
                                        <Button onClick={() => setComment("")}>Cancelar</Button>
                                        <Button
                                            type="submit"
                                            disabled={!publish}
                                            variant={publish ? "outlined" : "text"}
                                        >
                                            Publicar
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                            {comments?.map((comment) => (
                                <Box key={comment.id}>
                                    <ListComments
                                        id={comment.id}
                                        name={comment.name}
                                        email={comment.email}
                                        body={comment.body}
                                        postId={comment.postId}
                                    />
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};
