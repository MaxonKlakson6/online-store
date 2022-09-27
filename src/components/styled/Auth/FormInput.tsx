import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

import Input from 'components/Input';

import colors from 'static/colors/colors.scss';

export default styled(Input)`
    input::placeholder {
        padding-left: 10px;
    }
    .MuiInputBase-root:before {
        border-bottom-color: ${colors.grey};
    }
    .MuiInput-root:hover:not(.Mui-disabled):before {
        border-bottom: 1px solid ${colors.grey};
    }
    .MuiInput-root:after {
        border-bottom: 1px solid ${colors.green};
    }
` as typeof TextField;
