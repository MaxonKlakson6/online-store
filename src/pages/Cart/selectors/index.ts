import { RootState } from 'types/ReduxTypes';
import { createSelector } from 'reselect';
import { NewCartItem } from 'services/CartService/types';

export const cartSelector = (state: RootState) => state.cart.cartData;

export const cartListSelector = (state: RootState) =>
    state.cart.cartData.itemsList;

export const itemsQuantitySelector = (state: RootState) =>
    state.cart.cartData.quantity;

export const potentialCartItemSelector = createSelector(
    cartListSelector,
    (state: RootState, id: number) => id,
    (cartList, id) => {
        if (cartList) {
            return cartList.find((cartItem: NewCartItem) => cartItem.id === id);
        }
        return null;
    }
);

export const orderSelector = (state: RootState) => state.order.orderData;

export const orderDetailsSelector = createSelector(
    orderSelector,
    (state: RootState, id: string | undefined) => id,
    (order, id) => {
        if (order && id) {
            const orderItem = order.find((order) => order._id === id);

            return orderItem?.itemsList;
        }
        return null;
    }
);
