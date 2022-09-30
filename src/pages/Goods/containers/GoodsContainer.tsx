import GoodsLayout from 'pages/Goods/components/GoodsLayout';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { loadProducts } from 'pages/Goods/reducer';

const GoodsContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.shop.data);

    useEffect(() => {
        dispatch(loadProducts(1));
    }, []);

    return <GoodsLayout products={products} />;
};

export default GoodsContainer;
