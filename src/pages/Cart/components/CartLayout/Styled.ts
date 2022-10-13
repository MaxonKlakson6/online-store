import styled from '@emotion/styled';

import Typography from 'components/Typography';
import AuthGreenButton from 'components/styled/Auth/AuthGreenButton';

import colors from 'static/colors/colors.scss';

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: 100px auto 0;
`;

export const Title = styled(Typography)`
    font-family: Poppins;
    font-size: 26px;
`;

export const PageTitle = styled(Title)`
    width: fit-content;
    margin: 0 auto;
`;

export const CartHolder = styled.div`
    max-width: 1100px;
    margin: 50px auto;
`;

export const DoOrderHolder = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 70px;
    text-align: end;
`;

export const GreenButton = styled(AuthGreenButton)`
    width: fit-content;
    margin: 0;
    border-radius: 4px;
`;

export const OrderInfoTitle = styled(Typography)`
    font-family: Roboto;
    font-weight: 500;
    font-size: 20px;
    color: ${colors.black};
`;

export const OrderInfo = styled(Typography)`
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    color: #9e9e9e;
`;
