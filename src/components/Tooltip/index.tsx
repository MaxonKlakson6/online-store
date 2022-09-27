import { memo } from 'react';
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip = ({ title, children, className }: TooltipProps) => (
    <MuiTooltip title={title} className={className}>
        {children}
    </MuiTooltip>
);

export default memo(Tooltip);
