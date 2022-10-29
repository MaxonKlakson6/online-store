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

import { Cart } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

import gif from 'static/gifs/cart-empty.gif';
import EmptyCart from 'pages/Cart/components/EmptyCart';

interface CartLayoutProps {
    cart: Cart;
    handleRemoveCartItem: (id: number) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
    handleCreateOrder: () => void;
}

const CartLayout = ({
    cart,
    handleRemoveCartItem,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleCreateOrder,
}: CartLayoutProps): JSX.Element => (
    <Wrapper>
        <PageTitle>Your cart items</PageTitle>
        <CartHolder>
            {cart.itemsList.length > 0 ? (
                <>
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
                        <GreenButton onClick={handleCreateOrder}>
                            Order
                        </GreenButton>
                    </DoOrderHolder>
                </>
            ) : (
                <EmptyCart />
            )}
        </CartHolder>
    </Wrapper>
);

export default CartLayout;
