import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { api } from "../../shared/server/api/api";

export const Article: React.FC = () => {
    const params = useParams();
    const currentUser = params["*"] as unknown as string;
    const { data, isFetching } = useQuery("posts", api.getPost);
    const { data: comments } = useQuery("comments", () => api.getComments(currentUser));

    useEffect(() => {
        console.log(comments);
    }, [comments]);

    const post = data?.filter((post) =>
        post.id === Number(currentUser) ? post.id.toString().includes(currentUser) : false,
    );

    return (
        <>
            {post?.map((el) => (
                <div key={el.id}>
                    <p>{el.body}</p> <p>{el.title}</p> <p>{el.userId}</p>
                </div>
            ))}
        </>
    );
};
