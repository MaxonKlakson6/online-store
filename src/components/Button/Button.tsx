import { FC, memo } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';

import colors from 'static/colors/colors.scss';

const ButtonWithBorder = styled(MuiButton)`
    width: fit-content;
    color: #fff;
    border-radius: 4px;
    background: ${colors.green};
`;

const Button: FC<ButtonProps> = ({
    className,
    type,
    children,
    onClick,
    disabled = false,
}) => (
    <ButtonWithBorder
        disabled={disabled}
        className={className}
        onClick={onClick}
        type={type}
    >
        {children}
    </ButtonWithBorder>
);

export default memo(Button);
