import { NewOrder } from 'services/OrderService/types';
import { api } from 'api/apiConfig';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = '/order';

class OrderService {
    static instance = new OrderService();

    async addOrder(newOrder: NewOrder) {
        try {
            const response = await api.post(BASE_URL, newOrder);

            if (axios.isAxiosError(response)) {
                throw response;
            }

            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

    getOrder() {
        return api.get(BASE_URL);
    }
}

export default OrderService.instance;
