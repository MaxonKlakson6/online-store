import styled from '@emotion/styled';

import Typography from 'components/Typography';
import OrderList from 'pages/OrderDetails/components/OrderList';

import { OrderItem } from 'services/OrderService/types';

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 50px auto 0;
`;

const Title = styled(Typography)`
    text-align: center;
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
`;

interface OrderDetailsLayoutProps {
    orderItem: OrderItem[] | null | undefined;
}

const OrderDetailsLayout = ({
    orderItem,
}: OrderDetailsLayoutProps): JSX.Element => (
    <Wrapper>
        <Title>Order details</Title>
        <OrderList orderItem={orderItem} />
    </Wrapper>
);

export default OrderDetailsLayout;
