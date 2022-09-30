import { memo } from 'react';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';

const Typography = ({ children, className, variant }: TypographyProps) => (
    <MuiTypography className={className} variant={variant}>
        {children}
    </MuiTypography>
);

export default memo(Typography);
