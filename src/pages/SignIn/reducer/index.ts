import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import AuthService from 'services/AuthService';

import {
    SignInTypes,
    SignInResponseType,
    SignInData,
} from 'services/AuthService/types';

import { CONSTANTS } from 'constants/index';
import { ApiError } from 'types/ApiError';

interface signInState {
    isLoading: boolean;
    userData: SignInData | null;
    error: ApiError | null | undefined;
    isAuth: boolean;
}

const initialState: signInState = {
    isLoading: false,
    userData: null,
    error: null,
    isAuth: false,
};

export const login = createAsyncThunk<
    SignInResponseType,
    SignInTypes,
    { rejectValue: ApiError }
>('signIn/login', async (dataToLogin, { rejectWithValue }) => {
    try {
        const response = AuthService.signIn(dataToLogin);

        toast.promise(response, {
            pending: 'Waiting...',
        });

        await response;

        return response;
    } catch (error) {
        const apiError: ApiError = error as ApiError;
        return rejectWithValue(apiError);
    }
});

const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        resetLogin: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, { payload: response }) => {
            const { address, roles, __v, accessToken, ...requiredData } =
                response;
            state.isLoading = false;
            state.userData = requiredData;
            state.isAuth = true;
            localStorage.setItem(CONSTANTS.ACCESS_TOKEN, accessToken);
        });
        builder.addCase(login.rejected, (state, { payload: error }) => {
            state.error = error;
            state.isLoading = false;
        });
    },
});

export const { resetLogin } = signInSlice.actions;

export default signInSlice.reducer;
