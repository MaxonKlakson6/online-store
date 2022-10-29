import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Typography from 'components/Typography';
import Button from 'components/Button/Button';

import { ROUTE_NAMES } from 'router/routeNames';

import gif from 'static/gifs/cart-empty.gif';
import colors from 'static/colors/colors.scss';

const Gif = styled.img`
    width: 500px;
`;

const Wrapper = styled.div`
    width: fit-content;
    margin: 10px auto 0;
`;

const InfoHolder = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const InfoText = styled(Typography)`
    font-size: 16px;
    font-weight: 500;
`;

const GoShoppingButton = styled(Button)`
    border: 1px solid ${colors.green};
    &:hover {
        background-color: #fff;
        color: ${colors.green};
    }
`;

const EmptyCart = () => {
    const navigate = useNavigate();
    const handleNavigateToShop = () => {
        navigate(ROUTE_NAMES.PRODUCTS);
    };

    return (
        <Wrapper>
            <Gif src={gif} alt="Cart is empty" />
            <InfoHolder>
                <InfoText>Your cart is empty</InfoText>
                <GoShoppingButton onClick={handleNavigateToShop}>
                    Go shopping
                </GoShoppingButton>
            </InfoHolder>
        </Wrapper>
    );
};

export default EmptyCart;
