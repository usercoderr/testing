import axios from "axios";
import {IUser} from "../types/users.ts";

const pathLink = 'https://jsonplaceholder.typicode.com/'

const instance = axios.create({
    baseURL: pathLink,
})

export const testAPI = {
    getUsers() {
        return instance.get<IUser[]>(`users`).then(r => r)
    },
}
