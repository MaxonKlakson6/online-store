import { Route, Routes } from 'react-router-dom';

import PrivateRoute from 'router/PrivateRoute';
import SignInContainer from 'pages/SignIn/containers/SignInContainer';
import SignUpContainer from 'pages/SignUp/containers/SignUpContainer';
import GoodsContainer from 'pages/Goods/containers/GoodsContainer';
import ProductDetailsContainer from 'pages/ProductDetails/container/ProductDetailsContainer';
import AboutLayout from 'pages/About/components/AboutLayout';
import ContactLayout from 'pages/Contact/components/ContactLayout';

import { ROUTE_NAMES } from 'router/routeNames';

const Router = () => (
    <Routes>
        <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
        <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
        <Route element={<PrivateRoute />}>
            <Route path={ROUTE_NAMES.PRODUCTS} element={<GoodsContainer />} />
            <Route
                path={ROUTE_NAMES.PRODUCTS_DETAILS}
                element={<ProductDetailsContainer />}
            />
            <Route path={ROUTE_NAMES.ABOUT} element={<AboutLayout />} />
            <Route path={ROUTE_NAMES.CONTACT} element={<ContactLayout />} />
        </Route>
    </Routes>
);

export default Router;
