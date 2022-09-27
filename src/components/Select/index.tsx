import { memo } from 'react';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import styled from '@emotion/styled';

import { FormControl, InputLabel, MenuItem } from '@mui/material';

import colors from 'static/colors/colors.scss';

interface ISelect extends SelectProps {
    options: string[];
}

const Select = ({ label, options, value, name, onChange }: ISelect) => {
    const Label = styled(InputLabel)`
        color: ${colors.grey};
        &.Mui-focused {
            color: ${colors.green};
        }
    `;

    const StyledSelect = styled(MuiSelect)`
        fieldset {
            border-color: ${colors.grey};
        }
        &.Mui-focused fieldset {
            border: 2px solid ${colors.green} !important;
        }
    `;

    return (
        <FormControl fullWidth>
            <Label>{label}</Label>
            <StyledSelect
                label={label}
                value={value}
                name={name}
                onChange={onChange}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </StyledSelect>
        </FormControl>
    );
};

export default memo(Select);
