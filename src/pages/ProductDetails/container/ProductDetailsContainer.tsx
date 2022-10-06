import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import ProductDetailsLayout from 'pages/ProductDetails/components/ProductDetailsLayout';
import BaseLayout from 'components/BaseLayout';
import Progress from 'components/Progress';

import { loadProductDetails } from 'pages/ProductDetails/reducer';
import { useAppDispatch, useAppSelector } from 'hooks';
import { ROUTE_NAMES } from 'router/routeNames';

const ProductDetailsProgress = styled(Progress)`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const ProductDetailsContainer = () => {
    const { data, isLoading } = useAppSelector((state) => state.productDetails);
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(loadProductDetails(Number(id)));
    }, []);
    return (
        <BaseLayout location={ROUTE_NAMES.PRODUCTS}>
            {isLoading ? (
                <ProductDetailsProgress />
            ) : (
                <ProductDetailsLayout details={data} />
            )}
        </BaseLayout>
    );
};

export default ProductDetailsContainer;
