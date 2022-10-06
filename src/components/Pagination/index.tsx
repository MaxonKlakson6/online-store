import MuiPagination, { PaginationProps } from '@mui/material/Pagination';
import styled from '@emotion/styled';

import colors from 'static/colors/colors.scss';

const StyledPagination = styled(MuiPagination)`
    & li .Mui-selected {
        background-color: ${colors.green};
        color: #fff;
    }
    & li .Mui-selected:hover {
        background-color: ${colors.transparentGreen};
        color: #000;
    }
    & li button span {
        display: none;
    }
`;

const Pagination = ({
    count,
    page,
    disabled,
    className,
    onChange,
}: PaginationProps) => (
    <StyledPagination
        disabled={disabled}
        page={page}
        className={className}
        count={count}
        onChange={onChange}
    />
);

export default Pagination;
