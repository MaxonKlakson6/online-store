import { FC, memo } from 'react';
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip';

const Tooltip: FC<TooltipProps> = ({ title, children, className }) => (
    <MuiTooltip title={title} className={className}>
        {children}
    </MuiTooltip>
);

export default memo(Tooltip);
