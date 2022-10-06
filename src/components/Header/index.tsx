import { Link, useNavigate } from 'react-router-dom';

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

import { ROUTE_NAMES } from 'router/routeNames';

import logo from 'static/icons/bulbasaur-seeklogo.com.svg';
import 'static/fonts/fonts.scss';
import { useDispatch } from 'react-redux';
import { savePreviousPage } from 'pages/Goods/reducer';

interface HeaderProps {
    location: string;
}

const Header = ({ location }: HeaderProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Navbar>
                <Logo src={logo} alt="Bulbasaur icon" />
                <TabsHolder value={location}>
                    <Tab
                        label="Shop"
                        value={ROUTE_NAMES.PRODUCTS}
                        onClick={() => {
                            if (location !== ROUTE_NAMES.PRODUCTS) {
                                dispatch(savePreviousPage(1));
                                navigate(ROUTE_NAMES.PRODUCTS);
                            }
                        }}
                    />
                    <Tab
                        label="About us"
                        value={ROUTE_NAMES.ABOUT}
                        onClick={() => {
                            if (location !== ROUTE_NAMES.ABOUT) {
                                navigate(ROUTE_NAMES.ABOUT);
                            }
                        }}
                    />
                    <Tab
                        label="Contacts"
                        value={ROUTE_NAMES.CONTACT}
                        onClick={() => {
                            if (location !== ROUTE_NAMES.CONTACT) {
                                navigate(ROUTE_NAMES.CONTACT);
                            }
                        }}
                    />
                </TabsHolder>
                <IconHolder>
                    <Link to={ROUTE_NAMES.PROFILE}>
                        <ProfileIcon />
                    </Link>
                    <Link to={ROUTE_NAMES.CART}>
                        <CartIcon />
                    </Link>
                </IconHolder>
            </Navbar>
        </Wrapper>
    );
};

export default Header;
