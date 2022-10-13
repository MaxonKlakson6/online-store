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
