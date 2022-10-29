import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import ProductDetailsLayout from 'pages/ProductDetails/components/ProductDetailsLayout';
import BaseLayout from 'components/BaseLayout';
import Progress from 'components/Progress';

import { loadProductDetails } from 'pages/ProductDetails/reducer';
import { useAppDispatch, useAppSelector, useCart } from 'hooks';

import { detailsReducerSelector } from 'pages/ProductDetails/selectors';

const ProductDetailsProgress = styled(Progress)`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const ProductDetailsContainer = (): JSX.Element => {
    const { data, isLoading } = useAppSelector(detailsReducerSelector);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    const {
        handleAddProduct,
        handleIncrementQuantity,
        handleDecrementQuantity,
    } = useCart();

    useEffect(() => {
        dispatch(loadProductDetails(Number(id)));
    }, []);
    return (
        <BaseLayout location={false}>
            {isLoading ? (
                <ProductDetailsProgress />
            ) : (
                <ProductDetailsLayout
                    details={data}
                    handleAddProduct={handleAddProduct}
                    handleIncrementQuantity={handleIncrementQuantity}
                    handleDecrementQuantity={handleDecrementQuantity}
                />
            )}
        </BaseLayout>
    );
};

export default ProductDetailsContainer;
