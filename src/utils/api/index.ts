import { axiosInstance } from "../axios";

export async function login(){
    const res = await axiosInstance.get('/user');
    return res.data;
}