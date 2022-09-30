import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from 'api/apiConfig';
// TODO: add correct types
interface ShopInitialState {
    data: any;
    errors: any;
    isLoading: boolean;
}

const initialState: ShopInitialState = {
    errors: null,
    data: null,
    isLoading: false,
};

export const loadProducts = createAsyncThunk(
    'shop/loadProducts',
    (page: number) => api.get(`/products?page=${page}&limit=15`)
);

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
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

export default shopSlice.reducer;
