import { create } from "zustand";
import type { userAuthType } from "./types";
import { axiosInstance } from "../../utils";
import toast from "react-hot-toast";

export const userAuthStore = create<userAuthType>((set,get)=>({
    user: null,
    userLogin: async (data) =>{
        const res = await axiosInstance.post('/auth/login',data);
        set({user: res.data.user});
        toast.success(res.data.message);
    },
    userSignUp: async(data) => {
        const res = await axiosInstance.post("/auth/signup",data);
        set({user:res.data.user});
        toast.success(res.data.message);
    },
    checkAuth: async()=>{
        const res = await axiosInstance.get('/auth/check');
        set({user: res.data.user});
        const {user} = get();
        console.log(user);
        
    },

}))