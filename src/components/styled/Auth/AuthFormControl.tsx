import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export default styled(FormControl)`
    width: 100%;
    position: relative;
    &:not(:last-of-type) {
        margin-bottom: 30px;
    }
`;
