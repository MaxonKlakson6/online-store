import { MouseEvent } from 'react';
import styled from '@emotion/styled';

import Card from 'components/Card';

import { useAppSelector } from 'hooks';

import { PokemonCard } from 'services/ProductsService/types';

const ProductsHolder = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    row-gap: 30px;
`;

interface ProductsBlockProps {
    handleNavigateToProduct: (
        event: MouseEvent<HTMLDivElement>,
        id: number
    ) => void;
}

const ProductsBlock = ({ handleNavigateToProduct }: ProductsBlockProps) => {
    const products = useAppSelector((state) => state.shop.data);
    return (
        <ProductsHolder>
            {products &&
                products.map((product: PokemonCard) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        alt={`${product.name} image`}
                        handleNavigateToProduct={handleNavigateToProduct}
                        id={product.id}
                        title={product.name}
                        price={product.price}
                    />
                ))}
        </ProductsHolder>
    );
};

export default ProductsBlock;
