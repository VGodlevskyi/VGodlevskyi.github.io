import axios from "axios";
import getFromSessionStorage from "./SessionStorage/getFromSessionStorage";

const api = {
    get: async (url, noAuth) => {
        const headers = noAuth ? {} : { 'Authorization': getFromSessionStorage('token', '') }
        return await axios.get(url, { headers })
    },
    post: async (url, data, noAuth) => {
        const headers = noAuth ? {} : { 'Authorization': getFromSessionStorage('token', '') }
        return await axios.post(url, data, { headers })
    },
    put: async (url, data, noAuth) => {
        const headers = noAuth ? {} : { 'Authorization': getFromSessionStorage('token', '') }
        return await axios.put(url, data, { headers })
    },
    delete: async (url, data, noAuth) => {
        const headers = noAuth ? {} : { 'Authorization': getFromSessionStorage('token', '') }
        return await axios.delete(url, { data, headers })
    }
}

export default api;