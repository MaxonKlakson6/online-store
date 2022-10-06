import { ReactNode, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import styled from '@emotion/styled';

import Select from 'components/Select';
import GreenButton from 'components/styled/Auth/AuthGreenButton';
import FormInput from 'components/styled/Auth/FormInput';
import Title from 'components/styled/Auth/AuthTitle';
import Form from 'components/styled/Auth/AuthForm';
import FormControl from 'components/styled/Auth/AuthFormControl';
import ErrorHelperText from 'components/styled/ErrorHelperText';
import Tooltip from 'components/styled/Auth/AuthTooltip';
import ButtonVisibility from 'components/styled/Auth/VisibilityButton';

import { useVisibility } from 'hooks';
import { TEXT } from 'constants/text';

import { AuthFormsProps } from 'types/AuthFormsProps';
import { UserTypesToSignUp } from 'pages/SignUp/types/UserTypesToSignUp';
import { ConfirmAndPasswordVisibility } from 'pages/SignUp/types/ConfirmAndPasswordVisibility';

import colors from 'static/colors/colors.scss';

const Wrapper = styled.div`
    width: 50%;
    padding: 35px 0 35px 0;
    box-shadow: 0px 10px 40px 0px rgb(56 74 235 / 10%);
`;

interface SignUpFormTypes extends UserTypesToSignUp {
    confirm: string;
}

interface SignUpFormProps extends AuthFormsProps {
    form: SignUpFormTypes;
    handleChange: (
        event: ChangeEvent | SelectChangeEvent<unknown>,
        child?: ReactNode
    ) => void;
}

const SignUpForm = ({
    form,
    isLoading,
    handleChange,
    onSubmit,
    onBlur,
    touched,
    errors,
    dirty,
    isValid,
}: SignUpFormProps) => {
    const { visibility, handleChangeVisibility } =
        useVisibility<ConfirmAndPasswordVisibility>({
            password: false,
            confirm: false,
        });

    return (
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={onSubmit}>
                <FormControl>
                    <FormInput
                        variant="standard"
                        placeholder="Email"
                        value={form.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    {touched.email && errors.email && (
                        <ErrorHelperText>{errors.email}</ErrorHelperText>
                    )}
                </FormControl>
                <FormControl>
                    <FormInput
                        variant="standard"
                        placeholder="First name"
                        value={form.firstName}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    {touched.firstName && errors.firstName && (
                        <ErrorHelperText>{errors.firstName}</ErrorHelperText>
                    )}
                </FormControl>
                <FormControl>
                    <FormInput
                        variant="standard"
                        placeholder="Last name"
                        value={form.lastName}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    {touched.lastName && errors.lastName && (
                        <ErrorHelperText>{errors.lastName}</ErrorHelperText>
                    )}
                </FormControl>
                <FormControl>
                    <Select
                        label="Gender"
                        options={['male', 'female']}
                        value={form.gender}
                        name="gender"
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <Tooltip title={TEXT.PASSWORD_PROMPT}>
                        <QuestionMarkIcon />
                    </Tooltip>
                    <FormInput
                        variant="standard"
                        placeholder="Password"
                        value={form.password}
                        name="password"
                        type={visibility.password ? 'text' : 'password'}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <ButtonVisibility
                        onClick={(event) => {
                            handleChangeVisibility(event, 'password');
                        }}
                    >
                        {visibility.password ? (
                            <VisibilityOffIcon sx={{ color: colors.green }} />
                        ) : (
                            <VisibilityIcon sx={{ color: colors.green }} />
                        )}
                    </ButtonVisibility>
                    {touched.password && errors.password && (
                        <ErrorHelperText>{errors.password}</ErrorHelperText>
                    )}
                </FormControl>
                <FormControl>
                    <FormInput
                        variant="standard"
                        placeholder="Confirm password"
                        value={form.confirm}
                        name="confirm"
                        type={visibility.confirm ? 'text' : 'password'}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <ButtonVisibility
                        onClick={(event) => {
                            handleChangeVisibility(event, 'confirm');
                        }}
                    >
                        {visibility.confirm ? (
                            <VisibilityOffIcon sx={{ color: colors.green }} />
                        ) : (
                            <VisibilityIcon sx={{ color: colors.green }} />
                        )}
                    </ButtonVisibility>
                    {touched.confirm && errors.confirm && (
                        <ErrorHelperText>{errors.confirm}</ErrorHelperText>
                    )}
                </FormControl>
                <FormControl>
                    <FormInput
                        variant="standard"
                        placeholder="Phone"
                        value={form.phone}
                        name="phone"
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    {touched.phone && errors.phone && (
                        <ErrorHelperText>{errors.phone}</ErrorHelperText>
                    )}
                </FormControl>
                <GreenButton
                    type="submit"
                    disabled={!dirty || !isValid || isLoading}
                >
                    Sign up
                </GreenButton>
            </Form>
        </Wrapper>
    );
};

export default SignUpForm;
