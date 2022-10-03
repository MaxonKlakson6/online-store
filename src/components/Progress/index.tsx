import MuiProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

import colors from 'static/colors/colors.scss';

const StyledProgress = styled(MuiProgress)`
    color: ${colors.green};
    display: block;
`;

const Progress = ({ className }: CircularProgressProps) => (
    <StyledProgress className={className} />
);

export default Progress;
