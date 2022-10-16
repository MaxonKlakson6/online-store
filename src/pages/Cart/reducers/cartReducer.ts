import { createSlice } from '@reduxjs/toolkit';

import {
    addProduct,
    getCartItems,
    changeQuantity,
    deleteCartItem,
} from 'pages/Cart/thunks';

import { Cart } from 'services/CartService/types';

interface InitialState {
    isLoading: boolean;
    cartData: Cart;
    error: any;
}

const initialState: InitialState = {
    isLoading: false,
    cartData: {
        totalPrice: 0,
        quantity: 0,
        customerId: '',
        itemsList: [],
    },
    error: null,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            addProduct.fulfilled,
            (state, { payload: updatedCart }) => {
                const { __v, _id, ...neededCartFields } = updatedCart;

                state.isLoading = false;
                state.cartData = neededCartFields;
            }
        );

        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getCartItems.fulfilled, (state, { payload: cart }) => {
            const { __v, _id, ...neededCartFields } = cart;

            state.isLoading = false;
            state.cartData = neededCartFields;
        });

        builder.addCase(changeQuantity.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            changeQuantity.fulfilled,
            (state, { payload: updatedState }) => {
                state.isLoading = false;
                state.cartData.totalPrice = updatedState.cartState.totalPrice;

                const itemToUpdate = state.cartData.itemsList.find(
                    (cartItem) => cartItem.id === updatedState.updatedItem.id
                );

                itemToUpdate!.quantity = updatedState.updatedItem.quantity;
            }
        );

        builder.addCase(deleteCartItem.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            deleteCartItem.fulfilled,
            (state, { payload: deleteInfo }) => {
                const { quantity, totalPrice } = deleteInfo.cartState;

                state.isLoading = false;
                state.cartData.quantity = quantity;
                state.cartData.totalPrice = totalPrice;

                const indexToDelete = state.cartData.itemsList.findIndex(
                    (product) => product.id === deleteInfo.removedItemId
                );

                state.cartData.itemsList.splice(indexToDelete, 1);
            }
        );
    },
});

export default CartSlice.reducer;
