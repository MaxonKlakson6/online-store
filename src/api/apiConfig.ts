import axios from 'axios';

import { CONSTANTS } from 'constants/index';

const api = axios.create({
    baseURL: 'https://poke-store-api.herokuapp.com/',
});

api.interceptors.request.use((request) => {
    const token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);

    if (token) {
        request.headers!.Authorization = `Bearer ${token}`;
    }

    return request;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.data.statusCode === 401) {
            localStorage.clear();
            window.location.reload();
        }

        return error;
    }
);

export { api };
