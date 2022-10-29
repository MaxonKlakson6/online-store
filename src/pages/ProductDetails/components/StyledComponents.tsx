import styled from '@emotion/styled';

import { Title } from 'components/styled/Title';
import AuthGreenButton from 'components/styled/Auth/AuthGreenButton';

import colors from 'static/colors/colors.scss';

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px;
`;

export const ContentHolder = styled.div`
    margin: 0 165px;
    display: flex;
`;

export const ImageHolder = styled.div`
    width: fit-content;
    margin-right: 31px;
`;

export const Image = styled.img`
    width: 540px;
    height: 433px;
    background: ${colors.imageBackgroundGrey};
`;

export const ProductTitle = styled(Title)`
    font-size: 26px;
    margin-bottom: 9px;
`;

export const ProductPrice = styled(Title)`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 26px;
    color: ${colors.green};
`;

export const DetailsHeader = styled.div`
    width: fit-content;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AbilitiesHolder = styled.div`
    max-width: 1110px;
    margin: 20px auto 0;
`;

export const AddToCartButton = styled(AuthGreenButton)`
    margin: 0 0 12px 0;
    border-radius: 7px;
    font-weight: 400;
`;
