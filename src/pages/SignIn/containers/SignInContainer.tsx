import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { ToastContainer, toast } from 'react-toastify';

import AuthBanner from 'components/AuthBanner';
import SignInForm from 'pages/SignIn/components/SignInForm';
import Wrapper from 'components/styled/Auth/AuthLayoutWrapper';
import AuthHolder from 'components/styled/Auth/AuthHolder';

import { LoginScheme } from 'scheme/LoginScheme';
import { ROUTE_NAMES } from 'router/routeNames';
import { useAppDispatch, useAppSelector } from 'hooks';
import { login, resetLogin } from 'pages/SignIn/reducer';

const SignInContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { data, isLoading, error, isLogin } = useAppSelector(
        (state) => state.signIn
    );

    const {
        values,
        errors,
        isValid,
        touched,
        dirty,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginScheme,
        onSubmit: () => {
            dispatch(login(values));
        },
    });

    useEffect(() => {
        let timeout: TimeoutId;
        if (isLogin && data) {
            toast(
                `Hello ${data.firstName}. You successfully log in. Now we redirect you to store page.`,
                {
                    type: 'success',
                }
            );
            timeout = setTimeout(() => {
                navigate(ROUTE_NAMES.HOME);
                dispatch(resetLogin());
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [data]);

    useEffect(() => {
        if (error) {
            toast(`Error! ${error.message}`, { type: 'error' });
        }
    }, [error]);

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
            />
            <Wrapper>
                <AuthHolder>
                    <AuthBanner
                        title="New to our website?"
                        buttonText="Create an account"
                        routeTo={ROUTE_NAMES.SIGN_UP}
                    >
                        There are advances being made in science and technology
                        everyday, and a good example of this is the
                    </AuthBanner>
                    <SignInForm
                        values={values}
                        handleChange={handleChange}
                        onSubmit={handleSubmit}
                        errors={errors}
                        isValid={isValid}
                        dirty={dirty}
                        touched={touched}
                        onBlur={handleBlur}
                        isLoading={isLoading}
                    />
                </AuthHolder>
            </Wrapper>
        </>
    );
};

export default SignInContainer;
