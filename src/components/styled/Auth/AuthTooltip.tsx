import styled from '@emotion/styled';
import Tooltip from 'components/Tooltip';

import colors from 'static/colors/colors.scss';

export default styled(Tooltip)`
    position: absolute;
    top: -3px;
    right: 0;
    z-index: 1;
    color: ${colors.green};
    padding: 2px;
    background: rgba(86, 178, 128, 0.2);
    border-radius: 50%;
`;
