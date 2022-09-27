import { Navigate, Outlet } from 'react-router-dom';

import { CONSTANTS } from 'constants/index';
import { ROUTE_NAMES } from 'router/routeNames';

const PrivateRoutes = () => {
    const token: string | null = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);

    return token ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};

export default PrivateRoutes;
