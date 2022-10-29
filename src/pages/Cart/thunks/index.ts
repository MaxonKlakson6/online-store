import { createAsyncThunk } from '@reduxjs/toolkit';

import CartService from 'services/CartService';
import OrderService from 'services/OrderService';

import {
    CartResponse,
    ChangeQuantityDTO,
    ChangeQuantityResponse,
    DeleteCartItemResponse,
    NewCartItem,
} from 'services/CartService/types';
import {
    OrderResponse,
    NewOrder,
    OrderApiError,
} from 'services/OrderService/types';
import { toast } from 'react-toastify';

export const addProduct = createAsyncThunk<CartResponse, NewCartItem>(
    'cart/addProduct',
    async (itemToAdd) => {
        const response = await CartService.addProduct(itemToAdd);

        return response.data;
    }
);

export const getCartItems = createAsyncThunk<CartResponse>(
    'cart/getCartItems',
    async () => {
        const response = await CartService.getCart();

        return response.data;
    }
);

export const changeQuantity = createAsyncThunk<
    ChangeQuantityResponse,
    ChangeQuantityDTO
>('cart/changeQuantity', async (payload) => {
    const response = await CartService.changeQuantity(payload);

    return response.data;
});

export const deleteCartItem = createAsyncThunk<DeleteCartItemResponse, number>(
    'cart/deleteCartItem',
    async (id) => {
        const response = await CartService.deleteCartProduct(id);

        return response.data;
    }
);

export const getOrders = createAsyncThunk<OrderResponse[]>(
    'order/getOrders',
    async () => {
        const response = await OrderService.getOrder();

        return response.data;
    }
);

export const createNewOrder = createAsyncThunk<
    OrderResponse,
    NewOrder,
    { rejectValue: OrderApiError }
>(
    'order/createNewOrder',
    async (newOrder: NewOrder, { dispatch, rejectWithValue }) => {
        try {
            const response = OrderService.addOrder(newOrder);

            toast.promise(response, {
                pending: 'Waiting...',
            });
            await response;

            dispatch(getCartItems());

            return response;
        } catch (error) {
            const orderApiError = error as OrderApiError;
            return rejectWithValue(orderApiError);
        }
    }
);
