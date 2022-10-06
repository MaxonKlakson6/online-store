import { useEffect, MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import GoodsLayout from 'pages/Goods/components/GoodsLayout';

import { useAppDispatch, useAppSelector, usePagination } from 'hooks';
import { loadProducts, savePreviousPage } from 'pages/Goods/reducer';
import { shopSelector } from 'pages/Goods/selectors';

import { ROUTE_NAMES } from 'router/routeNames';
import BaseLayout from 'components/BaseLayout';

const GoodsContainer = () => {
    const dispatch = useAppDispatch();
    const { isLoading, page: prevPage } = useAppSelector(shopSelector);

    const navigate = useNavigate();

    const [page, handleChangePage] = usePagination(prevPage);

    const handleNavigateToProduct = useCallback(
        (event: MouseEvent<HTMLDivElement>, id: number) => {
            navigate(`${ROUTE_NAMES.PRODUCTS}/${id}`);
        },
        []
    );

    useEffect(() => {
        dispatch(loadProducts(page));

        return () => {
            dispatch(savePreviousPage(page));
        };
    }, [page]);

    return (
        <BaseLayout location={ROUTE_NAMES.PRODUCTS}>
            <GoodsLayout
                isLoading={isLoading}
                handleChangePage={handleChangePage}
                handleNavigateToProduct={handleNavigateToProduct}
                page={page}
            />
        </BaseLayout>
    );
};

export default GoodsContainer;
