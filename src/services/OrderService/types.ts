import { Cart, NewCartItem } from 'services/CartService/types';
import { ApiError } from 'types/ApiError';

export type NewOrder = Omit<Cart, 'quantity'>;

export interface OrderItem extends NewCartItem {
    _id: string;
}

export interface OrderResponse {
    _id: string;
    totalPrice: number;
    customerId: string;
    itemsList: OrderItem[];
    createdAt: string;
    __v: number;
}

export type OrdersList = OrderResponse[];

export type OrderApiError = Omit<ApiError, 'message'> & { message: string[] };
