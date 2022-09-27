import * as yup from 'yup';

export const UserScheme = yup.object().shape({
    email: yup
        .string()
        .email('Please enter correct email')
        .required('Email is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    password: yup
        .string()
        .min(8, 'Minimum 8 symbols')
        .matches(
            /(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
            'Incorrect password'
        )
        .required('Password is required'),
    confirm: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords aren't equal"),
    phone: yup.string().required('Phone number is required'),
});
