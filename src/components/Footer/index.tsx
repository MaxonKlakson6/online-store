import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Icon from 'components/Icon';
import Typography from 'components/Typography';

import { ROUTE_NAMES } from 'router/routeNames';

import logo from 'static/icons/bulbasaur-seeklogo.com.svg';
import colors from 'static/colors/colors.scss';

const Wrapper = styled.footer`
    padding: 60px 165px;
    background-color: #272727;
    color: #fff;
`;

const Logo = styled(Icon)`
    margin-bottom: 16px;
`;

const FooterContentHolder = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    border-top: 1.5px solid #fff;
`;

const TextUnderLogo = styled(Typography)`
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
`;

const LinksHolder = styled.div`
    margin-right: 30px;
    align-self: flex-start;
    display: grid;
    grid-template-columns: 170px 170px 170px;
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    &:hover {
        color: ${colors.green};
    }
`;

const Footer = () => (
    <Wrapper>
        <FooterContentHolder>
            <div>
                <Logo src={logo} alt="logo" />
                <TextUnderLogo>Pokeshop</TextUnderLogo>
            </div>
            <LinksHolder>
                <FooterLink to={ROUTE_NAMES.PRODUCTS}>Shop</FooterLink>
                <FooterLink to={ROUTE_NAMES.ABOUT}>About us</FooterLink>
                <FooterLink to={ROUTE_NAMES.CONTACT}>Contact us</FooterLink>
            </LinksHolder>
        </FooterContentHolder>
    </Wrapper>
);

export default Footer;
