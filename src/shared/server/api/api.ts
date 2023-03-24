import axios from "axios";

import { CommentsProps, PostProps, UserProps } from "../../types";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
async function getPost(): Promise<PostProps[]> {
    const response = await axios.get<PostProps[]>(`${BASE_URL}posts`);
    return response.data;
}

// https://jsonplaceholder.typicode.com/posts/1/comments
async function getComments(id: string): Promise<CommentsProps[]> {
    const response = await axios.get<CommentsProps[]>(`${BASE_URL}posts/${id}/comments`);
    return response.data;
}
async function getUsers(): Promise<UserProps[]> {
    const response = await axios.get<UserProps[]>(`${BASE_URL}users`);
    return response.data;
}

export const api = {
    getPost,
    getUsers,
    getComments,
};
