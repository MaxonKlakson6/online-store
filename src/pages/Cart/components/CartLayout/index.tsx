import CartTable from 'pages/Cart/components/CartTable';
import {
    Wrapper,
    PageTitle,
    CartHolder,
    DoOrderHolder,
    OrderInfoTitle,
    OrderInfo,
    GreenButton,
} from 'pages/Cart/components/CartLayout/Styled';

import { useAppSelector } from 'hooks';
import { Cart } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

interface CartLayoutProps {
    cart: Cart;
    handleRemoveCartItem: (id: number) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

const CartLayout = ({
    cart,
    handleRemoveCartItem,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: CartLayoutProps): JSX.Element => (
    <Wrapper>
        <PageTitle>Your cart items</PageTitle>
        <CartHolder>
            <CartTable
                cartList={cart.itemsList}
                handleRemoveCartItem={handleRemoveCartItem}
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
            />
            <DoOrderHolder>
                <div>
                    <OrderInfoTitle>{`Sub-total: ${cart.totalPrice}$`}</OrderInfoTitle>
                    <OrderInfo>
                        Tax and shipping cost will be calculated later
                    </OrderInfo>
                </div>
                <GreenButton>Order</GreenButton>
            </DoOrderHolder>
        </CartHolder>
    </Wrapper>
);

export default CartLayout;
