import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import ProductsService from 'services/ProductsService';

import { ProductDetailsResponse } from 'services/ProductsService/types';

interface ProductsDetailsInitState {
    data: ProductDetailsResponse;
    isLoading: boolean;
    error: any;
}

const initialState: ProductsDetailsInitState = {
    data: {
        id: 0,
        name: '',
        image: '',
        abilities: [{ title: '', description: '' }],
        stats: [{ title: '', value: 0 }],
        price: 0,
    },
    isLoading: false,
    error: null,
};

export const loadProductDetails = createAsyncThunk(
    'productDetails/loadProductDetails',
    async (id: number): Promise<ProductDetailsResponse> => {
        const response = await ProductsService.getProductDetails(id);

        return response.data;
    }
);

const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProductDetails.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loadProductDetails.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
        });
        builder.addCase(loadProductDetails.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default productDetailsSlice.reducer;
