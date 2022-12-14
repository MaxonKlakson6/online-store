import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Products } from 'services/ProductsService/types';

import ProductsService from 'services/ProductsService';

interface ShopInitialState {
    products: Products | null;
    errors: any;
    isLoading: boolean;
    page: number;
}

const initialState: ShopInitialState = {
    errors: null,
    products: null,
    isLoading: false,
    page: 1,
};

export const loadProducts = createAsyncThunk<Products, number>(
    'shop/loadProducts',
    async (page: number, { rejectWithValue }) => {
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
        savePreviousPage: (
            state,
            { payload: page }: { type: string; payload: number }
        ) => {
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
                state.products = products;
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
