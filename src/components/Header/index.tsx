import { Link } from 'react-router-dom';

import Logo from 'components/styled/Icon';
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

import 'static/fonts/fonts.scss';

interface HeaderProps {
    location: number;
}

const Header = ({ location }: HeaderProps) => (
    <Wrapper>
        <Navbar>
            <Logo />
            <TabsHolder value={location}>
                <Tab label="Shop" value={0} />
                <Tab label="About us" value={1} />
                <Tab label="Contacts" value={2} />
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

export default Header;
