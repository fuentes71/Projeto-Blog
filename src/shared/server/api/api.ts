import axios from "axios";

import { PostProps } from "../../types";
import { UserProps } from "../../types/UserProps";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
async function getPost(): Promise<PostProps[]> {
    const response = await axios.get<PostProps[]>(`${BASE_URL}posts`);
    return response.data;
}
async function getUsers(): Promise<UserProps[]> {
    const response = await axios.get<UserProps[]>(`${BASE_URL}users`);
    return response.data;
}

export const api = {
    getPost,
    getUsers,
};
