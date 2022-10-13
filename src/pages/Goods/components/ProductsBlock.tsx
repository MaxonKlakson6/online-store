import { MouseEvent } from 'react';
import styled from '@emotion/styled';

import Card from 'components/Card';

import { useAppSelector } from 'hooks';
import { mergedWithCartSelector } from 'pages/Goods/selectors';

import { PokemonCard } from 'services/ProductsService/types';
import { NewCartItem } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

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
    handleAddProduct: (itemToAdd: NewCartItem) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

interface MergedPokemonCard extends PokemonCard {
    quantity?: number;
}

const ProductsBlock = ({
    handleNavigateToProduct,
    handleAddProduct,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: ProductsBlockProps): JSX.Element => {
    const products = useAppSelector(mergedWithCartSelector);

    return (
        <ProductsHolder>
            {products &&
                products.map((product: MergedPokemonCard) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        alt={`${product.name} image`}
                        quantity={product.quantity}
                        id={product.id}
                        title={product.name}
                        price={product.price}
                        handleNavigateToProduct={handleNavigateToProduct}
                        handleAddProduct={handleAddProduct}
                        handleIncrementQuantity={handleIncrementQuantity}
                        handleDecrementQuantity={handleDecrementQuantity}
                    />
                ))}
        </ProductsHolder>
    );
};

export default ProductsBlock;
