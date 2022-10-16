import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BaseLayout from 'components/BaseLayout';
import OrderDetailsLayout from 'pages/OrderDetails/components/OrderDetailsLayout';

import { useAppDispatch, useAppSelector } from 'hooks';
import { orderDetailsSelector, orderSelector } from 'pages/Cart/selectors';
import { getOrders } from 'pages/Cart/thunks';

const OrderDetailsContainer = (): JSX.Element => {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const order = useAppSelector(orderSelector);
    const orderItem = useAppSelector((state) =>
        orderDetailsSelector(state, id)
    );

    useEffect(() => {
        if (!order) {
            dispatch(getOrders());
        }
    }, []);

    return (
        <BaseLayout location={false}>
            <OrderDetailsLayout orderItem={orderItem} />
        </BaseLayout>
    );
};

export default OrderDetailsContainer;
