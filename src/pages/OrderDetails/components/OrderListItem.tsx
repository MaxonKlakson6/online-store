import capitalize from 'lodash/capitalize';
import { TableCell, TableRow } from '@mui/material';
import styled from '@emotion/styled';

import colors from 'static/colors/colors.scss';

const Image = styled.img`
    width: 160px;
    background-color: ${colors.imageBackgroundGrey};
`;

interface OrderListItemProps {
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const OrderListItem = ({
    name,
    image,
    price,
    quantity,
}: OrderListItemProps): JSX.Element => {
    const totalPrice = price * quantity;

    return (
        <TableRow>
            <TableCell sx={{ maxWidth: '70px' }}>
                <Image src={image} alt="product" />
            </TableCell>
            <TableCell>{capitalize(name)}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{totalPrice}</TableCell>
        </TableRow>
    );
};

export default OrderListItem;
