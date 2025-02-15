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

export const handleAdd = async (data: any) => API.post("/addCard", data);
export const handleDelete = async (id: string) => API.delete(`/deleteCard/${id}`);
export const handleUpdate = async (id: string, data: any) => API.patch(`/updateCard/${id}`, data);
export const getCards = async () => API.get("/getCards");