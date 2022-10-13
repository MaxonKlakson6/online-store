import { MouseEvent } from 'react';
import { CardMedia } from '@mui/material';
import { capitalize } from 'lodash';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Typography from 'components/Typography';
import Counter from 'components/Counter';
import {
    CardHolder,
    StyledCard,
    CardInfoBlock,
    ButtonAddToCart,
} from 'components/Card/StyledComponents';
import { Title } from 'components/styled/Title';

import { useAppSelector } from 'hooks';

import { NewCartItem } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

interface CardProps {
    image: string;
    alt: string;
    title: string;
    price: number;
    id: number;
    quantity?: number;
    handleNavigateToProduct: (
        event: MouseEvent<HTMLDivElement>,
        id: number
    ) => void;
    handleAddProduct: (itemToAdd: NewCartItem) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

const Card = ({
    image,
    alt,
    quantity,
    title,
    price,
    id,
    handleNavigateToProduct,
    handleAddProduct,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: CardProps): JSX.Element => {
    const isLoading = useAppSelector((state) => state.cart.isLoading);
    const handleAddToCart = (event: MouseEvent) => {
        event.stopPropagation();
        handleAddProduct({
            id,
            image,
            name: title,
            price,
            quantity: 1,
        });
    };

    return (
        <CardHolder onClick={(event) => handleNavigateToProduct(event, id)}>
            <StyledCard>
                <CardMedia
                    component="img"
                    height="154"
                    image={image}
                    alt={alt}
                />
                <CardInfoBlock>
                    <div style={{ flexGrow: 1 }}>
                        <Title variant="h5">{capitalize(title)}</Title>
                        <Typography>{`${price}$`}</Typography>
                    </div>
                    {quantity ? (
                        <Counter
                            id={id}
                            count={quantity}
                            isHasTitle={false}
                            onIncrement={handleIncrementQuantity}
                            onDecrement={handleDecrementQuantity}
                        />
                    ) : (
                        <ButtonAddToCart
                            type="button"
                            disabled={isLoading}
                            onClick={handleAddToCart}
                        >
                            <AddShoppingCartIcon />
                        </ButtonAddToCart>
                    )}
                </CardInfoBlock>
            </StyledCard>
        </CardHolder>
    );
};

Card.defaultProps = {
    quantity: undefined,
};

export default Card;
