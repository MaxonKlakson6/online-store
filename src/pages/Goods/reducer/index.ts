import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Products } from 'services/ProductsService/types';

import ProductsService from 'services/ProductsService';

interface ShopInitialState {
    data: Products | null;
    errors: any;
    isLoading: boolean;
    page: number;
}

const initialState: ShopInitialState = {
    errors: null,
    data: null,
    isLoading: false,
    page: 1,
};

export const loadProducts = createAsyncThunk(
    'shop/loadProducts',
    async (page: number, { rejectWithValue }): Promise<Products | any> => {
        try {
            const response = await ProductsService.getProducts(page);

            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        savePreviousPage: (state, { payload: page }) => {
            state.page = page;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            loadProducts.fulfilled,
            (state, { payload: products }) => {
                state.isLoading = false;
                state.data = products;
            }
        );
        builder.addCase(loadProducts.rejected, (state, { payload: error }) => {
            state.isLoading = false;
            state.errors = error;
        });
    },
});

export const { savePreviousPage } = shopSlice.actions;

export default shopSlice.reducer;
