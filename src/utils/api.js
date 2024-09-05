import axios from "axios";
import Cookies from 'js-cookie'


const api = axios.create({

    baseURL: "http://localhost:3000"

    //https://c2-server.onrender.com    URL DO BACKEND EM PRODUÇÃO
})

api.interceptors.request.use((config) => {
    
    const token = Cookies.get('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`

    }

    return config;
})



export default api