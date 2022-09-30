import { Route, Routes } from 'react-router-dom';

import SignInContainer from 'pages/SignIn/containers/SignInContainer';
import SignUpContainer from 'pages/SignUp/containers/SignUpContainer';
import GoodsContainer from 'pages/Goods/containers/GoodsContainer';

import { ROUTE_NAMES } from 'router/routeNames';
import PrivateRoute from 'router/PrivateRoute';

const Router = () => (
    <Routes>
        <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
        <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
        <Route element={<PrivateRoute />}>
            <Route path={ROUTE_NAMES.HOME} element={<GoodsContainer />} />
        </Route>
    </Routes>
);

export default Router;
