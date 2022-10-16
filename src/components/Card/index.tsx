import { MouseEvent } from 'react';
import { CardMedia } from '@mui/material';
import { capitalize } from 'lodash';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

import Typography from 'components/Typography';
import {
    CardHolder,
    StyledCard,
    CardInfoBlock,
    ButtonWithIcon,
    ButtonDeleteFromCart,
} from 'components/Card/StyledComponents';
import Counter from 'components/Counter';
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
    handleRemoveCartItem: (id: number) => void;
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
    handleRemoveCartItem,
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
                        <div>
                            <Counter
                                id={id}
                                count={quantity}
                                isHasTitle={false}
                                onIncrement={handleIncrementQuantity}
                                onDecrement={handleDecrementQuantity}
                            />
                            <ButtonDeleteFromCart
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleRemoveCartItem(id);
                                }}
                            >
                                <RemoveShoppingCartOutlinedIcon />
                            </ButtonDeleteFromCart>
                        </div>
                    ) : (
                        <ButtonWithIcon
                            type="button"
                            disabled={isLoading}
                            onClick={handleAddToCart}
                        >
                            <AddShoppingCartIcon />
                        </ButtonWithIcon>
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
