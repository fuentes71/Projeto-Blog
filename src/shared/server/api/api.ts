import axios from "axios";

import { PostProps } from "../../types";
import { UserProps } from "../../types/UserProps";

const url = "https://jsonplaceholder.typicode.com/";
async function getPost(): Promise<PostProps[]> {
    const response = await axios.get<PostProps[]>(`${url}posts`);
    return response.data;
}
async function getUsers(): Promise<UserProps[]> {
    const response = await axios.get<UserProps[]>(`${url}users`);
    return response.data;
}

export const api = {
    getPost,
    getUsers,
};
