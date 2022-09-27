import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import Button from 'components/styled/Auth/AuthGreenButton';

import colors from 'static/colors/colors.scss';
import 'static/fonts/fonts.scss';

export const Wrapper = styled.div`
    width: 50%;
    background-color: ${colors.green};
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled(Typography)`
    margin-bottom: 15px;
    font-family: Oswald;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #fff;
` as typeof Typography;

export const TextBox = styled(Typography)`
    max-width: 390px;
    margin: 0 auto;
    text-align: center;
    font-family: Roboto;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.6em;
    color: #fff;
` as typeof Typography;

export const GreenButton = styled(Button)`
    width: fit-content;
    margin: 20px auto 0;
    padding: 7px 42px;
    border: 1px solid #fff;
    font-size: 15px;
    text-transform: uppercase;
    &:hover {
        background: #fff;
        color: ${colors.green};
    }
` as typeof Button;
