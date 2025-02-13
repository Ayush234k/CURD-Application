import axios from "axios";

const API = axios.create({baseURL: "http://localhost:4000/api/users"});

export const login = async (data: any) => {
    const response = await API.post("/login", data);
    return response;
}

export const signup = async (data: any) => {
    const response = await API.post("/signup", data);
    return response;
}