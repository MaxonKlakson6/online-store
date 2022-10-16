import { useEffect, MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import GoodsLayout from 'pages/Goods/components/GoodsLayout';

import { useAppDispatch, useAppSelector, useCart, usePagination } from 'hooks';
import { loadProducts, savePreviousPage } from 'pages/Goods/reducer';
import { shopReducerSelector } from 'pages/Goods/selectors';

import { ROUTE_NAMES } from 'router/routeNames';
import BaseLayout from 'components/BaseLayout';

const GoodsContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { isLoading, page: prevPage } = useAppSelector(shopReducerSelector);

    const {
        handleAddProduct,
        handleIncrementQuantity,
        handleDecrementQuantity,
        handleRemoveCartItem,
    } = useCart();

    const navigate = useNavigate();

    const [page, handleChangePage] = usePagination(prevPage);

    const handleNavigateToProduct = useCallback(
        (event: MouseEvent<HTMLDivElement>, id: number) => {
            navigate(`${ROUTE_NAMES.PRODUCTS}/${id}`);
        },
        []
    );

    useEffect(() => {
        if (page > 0) {
            dispatch(loadProducts(page));
        }
        return () => {
            if (page > 0) {
                dispatch(savePreviousPage(page));
            }
        };
    }, [page]);

    return (
        <BaseLayout location={ROUTE_NAMES.PRODUCTS}>
            <GoodsLayout
                isLoading={isLoading}
                handleChangePage={handleChangePage}
                handleNavigateToProduct={handleNavigateToProduct}
                page={page}
                handleAddProduct={handleAddProduct}
                handleRemoveCartItem={handleRemoveCartItem}
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
            />
        </BaseLayout>
    );
};

export default GoodsContainer;
