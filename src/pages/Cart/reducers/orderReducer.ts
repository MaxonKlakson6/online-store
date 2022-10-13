import { createSlice } from '@reduxjs/toolkit';

interface OrderInitialState {
    orderData: any;
    isLoading: boolean;
    error: any;
}

const initialState: OrderInitialState = {
    orderData: null,
    isLoading: false,
    error: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
});

export default orderSlice.reducer;
