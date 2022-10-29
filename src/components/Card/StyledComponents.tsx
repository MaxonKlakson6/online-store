import styled from '@emotion/styled';
import MuiCard from '@mui/material/Card';
import { CardContent } from '@mui/material';

import colors from 'static/colors/colors.scss';

export const CardHolder = styled.div`
    position: relative;
    width: fit-content;
    min-height: 247px;
    cursor: pointer;
    &:hover {
        & .MuiCard-root {
            filter: drop-shadow(0px 4px 24px rgba(123, 123, 123, 0.3));
        }
    }
`;

export const StyledCard = styled(MuiCard)`
    width: 255px;
    height: 100%;
    filter: drop-shadow(0px 4px 24px rgba(123, 123, 123, 0.15));
    box-shadow: none;
`;

export const CardInfoBlock = styled(CardContent)`
    border-top: 1px solid ${colors.grey};
    display: flex;
`;

export const ButtonWithIcon = styled.button`
    border: 0;
    align-self: flex-start;
    justify-self: flex-end;
    background: rgba(247, 248, 250, 0.7);
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background: ${colors.transparentGreen};
        color: ${colors.green};
    }
    &:disabled {
        background: rgba(247, 248, 250, 0.7);
        color: #000;
        cursor: auto;
    }
`;

export const ButtonDeleteFromCart = styled(ButtonWithIcon)`
    position: absolute;
    bottom: 10px;
    right: 15px;
`;
