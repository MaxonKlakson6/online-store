import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styled from '@emotion/styled';

import Logo from 'components/Icon';
import Tab from 'components/Tab';
import {
    Wrapper,
    Navbar,
    TabsHolder,
    IconHolder,
    ProfileIcon,
    CartIcon,
} from 'components/Header/StyledComponents';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getCartItems } from 'pages/Cart/thunks';
import { savePreviousPage } from 'pages/Goods/reducer';

import { itemsQuantitySelector } from 'pages/Cart/selectors';
import { ROUTE_NAMES } from 'router/routeNames';

import logo from 'static/icons/bulbasaur-seeklogo.com.svg';
import colors from 'static/colors/colors.scss';
import 'static/fonts/fonts.scss';

const StyledBadge = styled(Badge)`
    color: #fff;
    span {
        background: ${colors.green};
    }
`;

const TransparentButton = styled.button`
    padding: 0;
    background: 0;
    border: 0;
    cursor: pointer;
`;

interface HeaderProps {
    location: string | boolean;
}

const Header = ({ location }: HeaderProps): JSX.Element => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const customerId = useAppSelector(
        (state) => state.cart.cartData.customerId
    );
    const itemsQuantity = useSelector(itemsQuantitySelector);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const handleTabNavigate = (linkTo: string) => {
        if (linkTo === ROUTE_NAMES.PRODUCTS) {
            dispatch(savePreviousPage(1));
        }
        navigate(linkTo);
    };

    useEffect(() => {
        if (!customerId) {
            dispatch(getCartItems());
        }
    }, []);

    return (
        <Wrapper>
            <Navbar>
                <TransparentButton
                    type="button"
                    onClick={() => {
                        navigate(ROUTE_NAMES.PRODUCTS);
                    }}
                >
                    <Logo src={logo} alt="Bulbasaur icon" />
                </TransparentButton>
                <TabsHolder value={location}>
                    <Tab
                        label="Shop"
                        value={ROUTE_NAMES.PRODUCTS}
                        onClick={() => {
                            handleTabNavigate(ROUTE_NAMES.PRODUCTS);
                        }}
                    />
                    <Tab
                        label="About us"
                        value={ROUTE_NAMES.ABOUT}
                        onClick={() => {
                            handleTabNavigate(ROUTE_NAMES.ABOUT);
                        }}
                    />
                    <Tab
                        label="Contacts"
                        value={ROUTE_NAMES.CONTACT}
                        onClick={() => {
                            handleTabNavigate(ROUTE_NAMES.CONTACT);
                        }}
                    />
                </TabsHolder>
                <IconHolder>
                    <Link to={ROUTE_NAMES.PROFILE}>
                        <ProfileIcon />
                    </Link>
                    <Link to={ROUTE_NAMES.CART}>
                        <StyledBadge badgeContent={itemsQuantity}>
                            <CartIcon />
                        </StyledBadge>
                    </Link>
                    <TransparentButton type="button" onClick={handleLogout}>
                        <LogoutOutlinedIcon />
                    </TransparentButton>
                </IconHolder>
            </Navbar>
        </Wrapper>
    );
};

export default Header;
