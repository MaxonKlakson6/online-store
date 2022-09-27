import styled from '@emotion/styled';

import Button from 'components/Button/Button';

import colors from 'static/colors/colors.scss';
import 'static/fonts/fonts.scss';

export default styled(Button)`
    width: 100%;
    margin: 20px auto 0;
    padding: 5px 40px;
    border-radius: 30px;
    background: ${colors.green};
    border: 1px solid #fff;
    font-family: Roboto;
    font-weight: 500;
    font-size: 18px;
    text-transform: none;
    &:hover {
        background: #fff;
        border: 1px solid ${colors.green};
        color: ${colors.green};
    }
`;
