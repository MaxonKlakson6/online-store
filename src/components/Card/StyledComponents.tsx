import styled from '@emotion/styled';
import MuiCard from '@mui/material/Card';
import { CardContent } from '@mui/material';

import colors from 'static/colors/colors.scss';
import Typography from 'components/Typography';

export const CardHolder = styled.div`
    width: fit-content;
    cursor: pointer;
    &:hover {
        & .MuiCard-root {
            filter: drop-shadow(0px 4px 24px rgba(123, 123, 123, 0.3));
        }
    }
`;

export const StyledCard = styled(MuiCard)`
    width: 255px;
    filter: drop-shadow(0px 4px 24px rgba(123, 123, 123, 0.15));
    box-shadow: none;
`;

export const CardInfoBlock = styled(CardContent)`
    border-top: 1px solid ${colors.grey};
    display: flex;
`;

export const ButtonAddToCart = styled.button`
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
`;
