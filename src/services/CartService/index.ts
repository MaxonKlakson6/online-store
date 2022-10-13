import { ChangeQuantityDTO, NewCartItem } from 'services/CartService/types';
import { api } from 'api/apiConfig';
import { AxiosResponse } from 'axios';

const BASE_URL = '/cart';
const ITEM_ENDPOINT = `${BASE_URL}/item`;

class CartService {
    static instance = new CartService();

    getCart(): Promise<AxiosResponse<any>> {
        return api.get(BASE_URL);
    }

    addProduct(product: NewCartItem) {
        return api.post(ITEM_ENDPOINT, product);
    }

    changeQuantity(payload: ChangeQuantityDTO) {
        return api.patch(ITEM_ENDPOINT, payload);
    }

    deleteCartProduct(id: number) {
        return api.delete(`${ITEM_ENDPOINT}/${id}`);
    }
}

export default CartService.instance;
