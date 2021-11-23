import axios from 'axios';

export const amgApi = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    params: {}
});


