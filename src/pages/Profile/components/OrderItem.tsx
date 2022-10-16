import { TableCell, TableRow } from '@mui/material';
import styled from '@emotion/styled';

import Button from 'components/Button/Button';

import colors from 'static/colors/colors.scss';

const ButtonGetInfoHolder = styled(TableCell)`
    border-top: 1px solid rgb(224, 224, 224);
`;

const ButtonGetInfo = styled(Button)`
    border: 1px solid ${colors.green};
    &:hover {
        background-color: #fff;
        color: ${colors.green};
    }
`;

interface OrderItemProps {
    id: string;
    createdAt: string;
    totalPrice: number;
    handleNavigateToOrderDetails: (id: string) => void;
}

const OrderItem = ({
    id,
    createdAt,
    totalPrice,
    handleNavigateToOrderDetails,
}: OrderItemProps): JSX.Element => (
    <TableRow>
        <TableCell>{createdAt}</TableCell>
        <TableCell>{id}</TableCell>
        <TableCell>{totalPrice}</TableCell>
        <ButtonGetInfoHolder>
            <ButtonGetInfo onClick={() => handleNavigateToOrderDetails(id)}>
                Get info
            </ButtonGetInfo>
        </ButtonGetInfoHolder>
    </TableRow>
);

export default OrderItem;
