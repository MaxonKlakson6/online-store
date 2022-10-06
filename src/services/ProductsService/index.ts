import { api } from 'api/apiConfig';
import axios from 'axios';

const BASE_URL = '/products';

class ProductsService {
    static instance = new ProductsService();

    async getProducts(page: number) {
        try {
            const response = await api.get(`${BASE_URL}?page=${page}&limit=20`);

            if (axios.isAxiosError(response)) {
                throw response;
            }

            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

    getProductDetails(id: number) {
        return api.get(`${BASE_URL}/${id}`);
    }
}

export default ProductsService.instance;
