import { capitalize } from 'lodash';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import styled from '@emotion/styled';

import List from 'pages/ProductDetails/components/List';
import Counter from 'components/Counter';
import {
    AddToCartButton,
    DetailsHeader,
    ProductPrice,
    ProductTitle,
} from 'pages/ProductDetails/components/StyledComponents';

import { useAppSelector } from 'hooks';

const Wrapper = styled.div`
    width: 50%;
`;

const InfoBlock = () => {
    const details = useAppSelector((state) => state.productDetails.data);
    const isOnCart = false;
    return (
        <Wrapper>
            <DetailsHeader>
                <ProductTitle variant="h1">
                    {capitalize(details.name)}
                </ProductTitle>
                <ProductPrice>{`$ ${details.price}`}</ProductPrice>
                {isOnCart ? (
                    <Counter />
                ) : (
                    <AddToCartButton>
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
