import { MouseEvent } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import styled from '@emotion/styled';

import OrderItem from 'pages/Profile/components/OrderItem';

import { OrdersList } from 'services/OrderService/types';

import colors from 'static/colors/colors.scss';

const CollapseButton = styled.button`
    width: fit-content;
    margin: 20px auto 0;
    padding: 0;
    border: 0;
    border-bottom: 2px solid #fff;
    display: block;
    font-size: 26px;
    background: none;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid ${colors.green};
    }
`;

type KeyOfFullOrders = keyof { fullOrders: boolean };

interface OrderListProps {
    orders: OrdersList | null | undefined;
    handleNavigateToOrderDetails: (id: string) => void;
    handleChangeVisibility: (event: MouseEvent, name: KeyOfFullOrders) => void;
}

const OrderList = ({
    orders,
    handleNavigateToOrderDetails,
    handleChangeVisibility,
}: OrderListProps): JSX.Element => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Created at</TableCell>
                    <TableCell>Order id</TableCell>
                    <TableCell>Total price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders?.map((order) => {
                    const createdAt = order.createdAt.slice(0, 10);

                    return (
                        <OrderItem
                            key={order._id}
                            id={order._id}
                            createdAt={createdAt}
                            totalPrice={order.totalPrice}
                            handleNavigateToOrderDetails={
                                handleNavigateToOrderDetails
                            }
                        />
                    );
                })}
            </TableBody>
        </Table>
        <CollapseButton
            type="button"
            onClick={(event) => handleChangeVisibility(event, 'fullOrders')}
        >
            <MoreHorizOutlinedIcon
                sx={{ color: colors.green, display: 'block' }}
            />
        </CollapseButton>
    </TableContainer>
);

export default OrderList;
