import { api } from 'api/apiConfig';
import axios from 'axios';

import { Products } from 'pages/Goods/types/Prducts';

export const getProducts = async (page: number): Promise<Products> => {
    try {
        const response = await api.get(`/products?page=${page}&limit=20`);

        if (axios.isAxiosError(response)) {
            throw response;
        }

        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
