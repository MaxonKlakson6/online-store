import { createSelector } from 'reselect';
import { RootState } from 'types/ReduxTypes';

import { cartListSelector } from 'pages/Cart/selectors';

import { NewCartItem } from 'services/CartService/types';

export const shopReducerSelector = (state: RootState) => state.shop;
export const productsSelector = (state: RootState) => state.shop.products;

interface QuantityMap {
    [key: string]: number;
}

export const mergedWithCartSelector = createSelector(
    productsSelector,
    cartListSelector,
    (products, cartList) => {
        if (cartList && products) {
            const quantityMap = cartList.reduce(
                (result: QuantityMap, cartItem: NewCartItem) => {
                    result[cartItem.id] = cartItem.quantity;
                    return result;
                },
                {}
            );

            return products.map((product) => {
                const updatedProduct = {
                    ...product,
                    quantity: quantityMap[product.id],
                };

                return quantityMap[product.id] ? updatedProduct : product;
            });
        }
        return null;
    }
);
