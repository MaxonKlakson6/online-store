import { capitalize } from 'lodash';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import styled from '@emotion/styled';

import List from 'pages/ProductDetails/components/List';
import {
    AddToCartButton,
    DetailsHeader,
    ProductPrice,
    ProductTitle,
} from 'pages/ProductDetails/components/StyledComponents';
import Counter from 'components/Counter';

import { useAppSelector } from 'hooks';

import { detailsSelector } from 'pages/ProductDetails/selectors';
import { potentialCartItemSelector } from 'pages/Cart/selectors';

import { NewCartItem } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

const Wrapper = styled.div`
    width: 50%;
`;

interface InfoBlockProps {
    handleAddProduct: (itemToAdd: NewCartItem) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

const InfoBlock = ({
    handleAddProduct,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: InfoBlockProps): JSX.Element => {
    const details = useAppSelector(detailsSelector);

    const potentialCartItem = useAppSelector((state) =>
        potentialCartItemSelector(state, details.id)
    );

    const handleAddToCart = () => {
        const { id, name, image, price } = details;
        handleAddProduct({
            id,
            name,
            image,
            price,
            quantity: 1,
        });
    };

    return (
        <Wrapper>
            <DetailsHeader>
                <ProductTitle variant="h1">
                    {capitalize(details.name)}
                </ProductTitle>
                <ProductPrice>{`$ ${details.price}`}</ProductPrice>
                {potentialCartItem ? (
                    <Counter
                        id={potentialCartItem.id}
                        count={potentialCartItem.quantity}
                        isHasTitle
                        onIncrement={handleIncrementQuantity}
                        onDecrement={handleDecrementQuantity}
                    />
                ) : (
                    <AddToCartButton onClick={handleAddToCart}>
                        <AddShoppingCartOutlinedIcon />
                        Add to cart
                    </AddToCartButton>
                )}
            </DetailsHeader>
            <List stats={details.stats} />
        </Wrapper>
    );
};

export default InfoBlock;
