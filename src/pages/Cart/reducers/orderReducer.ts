import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { createNewOrder, getOrders } from 'pages/Cart/thunks';

import { OrderApiError, OrdersList } from 'services/OrderService/types';

interface OrderInitialState {
    orderData: OrdersList | null;
    isLoading: boolean;
    error: OrderApiError | null | undefined;
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
    extraReducers: (builder) => {
        builder.addCase(createNewOrder.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createNewOrder.fulfilled, (state) => {
            state.isLoading = false;

            toast('Order successfully added', {
                type: 'success',
            });
        });
        builder.addCase(
            createNewOrder.rejected,
            (state, { payload: error }) => {
                state.error = error;
                error?.message.forEach((message) => {
                    toast(message, {
                        type: 'error',
                    });
                });
            }
        );

        builder.addCase(getOrders.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getOrders.fulfilled, (state, { payload: orders }) => {
            state.orderData = orders.reverse();
        });
    },
});

export default orderSlice.reducer;
