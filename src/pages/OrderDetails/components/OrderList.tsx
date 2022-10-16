import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import OrderListItem from 'pages/OrderDetails/components/OrderListItem';

import { OrderItem } from 'services/OrderService/types';

interface OrderListProps {
    orderItem: OrderItem[] | null | undefined;
}

const OrderList = ({ orderItem }: OrderListProps): JSX.Element => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orderItem &&
                    orderItem.map((product) => (
                        <OrderListItem
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
);
export default OrderList;
