import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileLayout from 'pages/Profile/components/ProfileLayout';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getOrders } from 'pages/Cart/thunks';

import { userInfoSelector } from 'pages/SignIn/selectors';
import { orderSelector } from 'pages/Cart/selectors';

import { ROUTE_NAMES } from 'router/routeNames';

const ProfileContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const userInfo = useSelector(userInfoSelector);
    const orders = useAppSelector(orderSelector);

    const navigate = useNavigate();

    const handleNavigateToOrderDetails = useCallback((id: string) => {
        navigate(`${ROUTE_NAMES.PROFILE}/${id}`);
    }, []);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <ProfileLayout
            userInfo={userInfo}
            orders={orders}
            handleNavigateToOrderDetails={handleNavigateToOrderDetails}
        />
    );
};

export default ProfileContainer;
