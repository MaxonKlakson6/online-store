import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BaseLayout from 'components/BaseLayout';
import CartLayout from 'pages/Cart/components/CartLayout';

import { useAppDispatch, useCart } from 'hooks';
import { createNewOrder } from 'pages/Cart/thunks';

const CartContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const {
        cart,
        handleRemoveCartItem,
        handleIncrementQuantity,
        handleDecrementQuantity,
    } = useCart();

    const handleCreateOrder = () => {
        const { quantity, ...neededCartFields } = cart;

        dispatch(createNewOrder(neededCartFields));
    };

    return (
        <BaseLayout location={false}>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
            />
            <CartLayout
                cart={cart}
                handleRemoveCartItem={handleRemoveCartItem}
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
                handleCreateOrder={handleCreateOrder}
            />
        </BaseLayout>
    );
};

export default CartContainer;
