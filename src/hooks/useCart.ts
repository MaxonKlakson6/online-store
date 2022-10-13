import { MouseEvent, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { addProduct, changeQuantity, deleteCartItem } from 'pages/Cart/thunks';

import { NewCartItem } from 'services/CartService/types';
import { cartListSelector, cartSelector } from 'pages/Cart/selectors';

export type QuantityFunction = (
    event: MouseEvent,
    id: number,
    quantity: number
) => void;

export const useCart = () => {
    const dispatch = useAppDispatch();

    const cart = useAppSelector(cartSelector);

    const handleAddProduct = useCallback((itemToAdd: NewCartItem) => {
        dispatch(addProduct(itemToAdd));
    }, []);

    const handleRemoveCartItem = useCallback((id: number) => {
        dispatch(deleteCartItem(id));
    }, []);

    const handleIncrementQuantity = useCallback(
        (event: MouseEvent, id: number, quantity: number) => {
            dispatch(changeQuantity({ id, quantity: quantity + 1 }));
        },
        []
    );

    const handleDecrementQuantity = useCallback(
        (event: MouseEvent, id: number, quantity: number) => {
            dispatch(changeQuantity({ id, quantity: quantity - 1 }));
        },
        []
    );

    return {
        cart,
        handleAddProduct,
        handleRemoveCartItem,
        handleIncrementQuantity,
        handleDecrementQuantity,
    };
};
