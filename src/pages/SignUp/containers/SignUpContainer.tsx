import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignUpLayout from 'pages/SignUp/components/SignUpLayout';
import AuthBanner from 'components/AuthBanner';
import SignUpForm from 'pages/SignUp/components/SignUpForm';

import { useFetching } from 'hooks';
import { signUp } from 'pages/SignUp/api/signUp';

import { ROUTE_NAMES } from 'router/routeNames';
import { UserScheme } from 'scheme/UserScheme';

import { UserTypesToSignUp } from 'pages/SignUp/types/UserTypesToSignUp';
import { SignUpResponse } from 'pages/SignUp/types/SignUpResponse';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

const SignUpContainer = (): JSX.Element => {
    const navigate = useNavigate();

    const { data, isLoading, requestError, makeRequest } = useFetching<
        UserTypesToSignUp | undefined,
        SignUpResponse
    >(signUp, false);

    const {
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleSubmit,
        handleBlur,
        dirty,
    } = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            gender: '',
            password: '',
            confirm: '',
            phone: '',
        },
        validationSchema: UserScheme,
        onSubmit: (): void => {
            const { confirm, ...userData } = values;

            const promise = makeRequest(userData);

            toast.promise(promise, {
                pending: 'Waiting...',
            });
        },
    });

    useEffect(() => {
        let timeout: TimeoutId;
        if (data?.success) {
            toast(`${data.message}`, {
                type: 'success',
            });
            timeout = setTimeout(() => {
                navigate(ROUTE_NAMES.SIGN_IN);
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [data]);

    useEffect(() => {
        if (requestError) {
            toast(`Error! ${requestError.message}`, { type: 'error' });
        }
    }, [requestError]);

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
            />
            <SignUpLayout>
                <AuthBanner
                    title="Already have an account?"
                    buttonText="Login Now"
                    routeTo={ROUTE_NAMES.SIGN_IN}
                >
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                </AuthBanner>
                <SignUpForm
                    form={values}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                    isValid={isValid}
                    dirty={dirty}
                    isLoading={isLoading}
                />
            </SignUpLayout>
        </>
    );
};

export default SignUpContainer;
