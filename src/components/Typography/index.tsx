import { FC, memo } from 'react';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';

const Typography: FC<TypographyProps> = ({ children, className, variant }) => (
    <MuiTypography className={className} variant={variant}>
        {children}
    </MuiTypography>
);

export default memo(Typography);
