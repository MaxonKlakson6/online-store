import { Tabs } from '@mui/material';
import styled from '@emotion/styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import colors from 'static/colors/colors.scss';

export const Wrapper = styled.div`
    max-width: 1440px;
    height: 75px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${colors.transparentGreen};
`;

export const Navbar = styled.div`
    width: 100%;
    margin-left: 165px;
    display: flex;
    align-items: center;
`;

export const TabsHolder = styled(Tabs)`
    margin: 0 270px 0 242px;
    flex: 1 1 auto;
    .MuiTabs-scroller .MuiTabs-flexContainer {
        justify-content: space-between;
    }

    & .MuiTabs-indicator {
        background-color: ${colors.green};
    }
`;

export const IconHolder = styled.div`
    margin-right: 170px;
    display: flex;
    gap: 20px;
    justify-self: flex-end;
`;

export const ProfileIcon = styled(PermIdentityIcon)`
    color: ${colors.black};
`;

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
    color: ${colors.black};
`;
