import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import TableItem from 'pages/Cart/components/TableItem';

import { NewCartItem } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

interface CartTableProps {
    cartList: NewCartItem[];
    handleRemoveCartItem: (id: number) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

const CartTable = ({
    cartList,
    handleRemoveCartItem,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: CartTableProps): JSX.Element => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cartList &&
                    cartList?.map((cartItem: NewCartItem) => (
                        <TableItem
                            key={cartItem.id}
                            id={cartItem.id}
                            image={cartItem.image}
                            price={cartItem.price}
                            total={cartItem.price}
                            quantity={cartItem.quantity}
                            onIncrementQuantity={handleIncrementQuantity}
                            onDecrementQuantity={handleDecrementQuantity}
                            onRemoveCartItem={handleRemoveCartItem}
                        />
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default CartTable;
