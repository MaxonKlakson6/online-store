import { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import GreenButton from 'components/styled/Auth/AuthGreenButton';
import FormInput from 'components/styled/Auth/FormInput';
import Title from 'components/styled/Auth/AuthTitle';
import FormControl from 'components/styled/Auth/AuthFormControl';
import Form from 'components/styled/Auth/AuthForm';
import ErrorHelperText from 'components/styled/ErrorHelperText';
import Tooltip from 'components/styled/Auth/AuthTooltip';
import ButtonVisibility from 'components/styled/Auth/VisibilityButton';

import { useVisibility } from 'hooks';

import { AuthFormsProps } from 'types/AuthFormsProps';
import { SignInTypes } from 'pages/SignIn/types/SignInTypes';
import { PasswordVisibility } from 'types/PasswordVisibility';

import 'static/fonts/fonts.scss';
import colors from 'static/colors/colors.scss';

const Wrapper = styled.div`
    width: 50%;
    padding-top: 115px;
    box-shadow: 0px 10px 40px 0px rgb(56 74 235 / 10%);
`;

interface SignInFormProps extends AuthFormsProps {
    values: SignInTypes;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SignInForm = ({
    values,
    errors,
    isValid,
    isLoading,
    touched,
    dirty,
    handleChange,
    onSubmit,
    onBlur,
}: SignInFormProps): JSX.Element => {
    const { visibility, handleChangeVisibility } =
        useVisibility<PasswordVisibility>({
            password: false,
        });
    return (
        <Wrapper>
            <Title>LOG IN TO ENTER</Title>
            <Form onSubmit={onSubmit}>
                <FormControl>
                    <FormInput
                        variant="standard"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    {touched.email && errors.email && (
                        <ErrorHelperText>{errors.email}</ErrorHelperText>
                    )}
                </FormControl>
                <FormControl>
                    <Tooltip title="Password have to include 1 uppercase latter 1 lowercase letter 1 digit. Minimum 8 symbols">
                        <QuestionMarkIcon />
                    </Tooltip>
                    <FormInput
                        variant="standard"
                        placeholder="Password"
                        name="password"
                        type={visibility.password ? 'text' : 'password'}
                        value={values.password}
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
                <GreenButton
                    type="submit"
                    disabled={!dirty || !isValid || isLoading}
                >
                    Log in
                </GreenButton>
            </Form>
        </Wrapper>
    );
};

export default SignInForm;
