import BaseLayout from 'components/BaseLayout';
import CartLayout from 'pages/Cart/components/CartLayout';
import { useCart } from 'hooks';

const CartContainer = (): JSX.Element => {
    const {
        cart,
        handleRemoveCartItem,
        handleIncrementQuantity,
        handleDecrementQuantity,
    } = useCart();

    return (
        <BaseLayout location={false}>
            <CartLayout
                cart={cart}
                handleRemoveCartItem={handleRemoveCartItem}
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
            />
        </BaseLayout>
    );
};

export default CartContainer;
