import styled from '@emotion/styled';

import Typography from 'components/Typography';
import BaseLayout from 'components/BaseLayout';
import OrderList from 'pages/Profile/components/OrderList';

import { SignInData } from 'services/AuthService/types';
import { OrdersList } from 'services/OrderService/types';

import colors from 'static/colors/colors.scss';
import { useVisibility } from 'hooks';

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 50px auto 0;
    display: grid;
    grid-template-columns: 20% auto;
    column-gap: 100px;
`;

const Title = styled(Typography)`
    padding-left: 40px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 22px;
`;

const UserInfo = styled.ul`
    margin-top: 30px;
    padding: 20px;
    border: 2px solid ${colors.green};
    list-style-type: none;
`;

const UserInfoItem = styled.li`
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

interface ProfileLayoutProps {
    userInfo: SignInData | null;
    orders: OrdersList | null;
    handleNavigateToOrderDetails: (id: string) => void;
}

const ProfileLayout = ({
    userInfo,
    orders,
    handleNavigateToOrderDetails,
}: ProfileLayoutProps): JSX.Element => {
    const { visibility, handleChangeVisibility } = useVisibility<{
        fullOrders: boolean;
    }>({ fullOrders: false });

    return (
        <BaseLayout location={false}>
            <Wrapper>
                <div>
                    <Title>Profile</Title>
                    <UserInfo>
                        <UserInfoItem>{`Name: ${userInfo?.firstName} ${userInfo?.lastName}`}</UserInfoItem>
                        <UserInfoItem>{`Email: ${userInfo?.email}`}</UserInfoItem>
                        <UserInfoItem>{`Phone: ${userInfo?.phone}`}</UserInfoItem>
                        <UserInfoItem>{`Gender: ${userInfo?.gender}`}</UserInfoItem>
                    </UserInfo>
                </div>
                <div>
                    <Title>Orders</Title>
                    <OrderList
                        orders={
                            visibility.fullOrders ? orders : orders?.slice(0, 8)
                        }
                        handleNavigateToOrderDetails={
                            handleNavigateToOrderDetails
                        }
                        handleChangeVisibility={handleChangeVisibility}
                    />
                </div>
            </Wrapper>
        </BaseLayout>
    );
};

export default ProfileLayout;
