import { memo } from 'react';
import { TextFieldProps } from '@mui/material';
import TextField from '@mui/material/TextField';

const Input = ({
    variant,
    className,
    placeholder,
    type,
    value,
    name,
    onChange,
    onBlur,
}: TextFieldProps): JSX.Element => (
    <TextField
        variant={variant}
        className={className}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        onBlur={onBlur}
    />
);

export default memo(Input);
