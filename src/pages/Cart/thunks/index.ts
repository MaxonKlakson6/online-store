import { createAsyncThunk } from '@reduxjs/toolkit';

import CartService from 'services/CartService';

import { ChangeQuantityDTO, NewCartItem } from 'services/CartService/types';

export const addProduct = createAsyncThunk(
    'cart/addProduct',
    async (itemToAdd: NewCartItem) => {
        const response = await CartService.addProduct(itemToAdd);

        return response.data;
    }
);

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    const response = await CartService.getCart();

    return response.data;
});

export const changeQuantity = createAsyncThunk(
    'cart/changeQuantity',
    async (payload: ChangeQuantityDTO) => {
        const response = await CartService.changeQuantity(payload);

        return response.data;
    }
);

export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem',
    async (id: number) => {
        const response = await CartService.deleteCartProduct(id);

        return response.data;
    }
);
