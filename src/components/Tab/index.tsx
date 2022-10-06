import MuiTab, { TabProps } from '@mui/material/Tab';
import styled from '@emotion/styled';

import colors from 'static/colors/colors.scss';
import 'static/fonts/fonts.scss';

const StyledTab = styled(MuiTab)`
    font-family: Roboto;
    font-size: 16px;
    opacity: 1;
    color: ${colors.black};
    font-weight: 500;
    text-transform: none;
    text-decoration: none;

    &:active {
        color: ${colors.green};
    }
`;

const Tab = ({ label }: TabProps) => <StyledTab label={label} />;

export default Tab;
