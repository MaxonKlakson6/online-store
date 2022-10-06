import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import AuthService from 'services/AuthService';

import { SignInTypes, SignInResponseType } from 'services/AuthService/types';

import { CONSTANTS } from 'constants/index';

interface signInState {
    isLoading: boolean;
    data: SignInResponseType | null;
    error: null | any;
    isLogin: boolean;
    isAuth: boolean;
}

const initialState: signInState = {
    isLoading: false,
    data: null,
    error: null,
    isLogin: false,
    isAuth: false,
};

export const login = createAsyncThunk(
    'signIn/login',
    async (
        dataToLogin: SignInTypes,
        { rejectWithValue }
    ): Promise<SignInResponseType | any> => {
        try {
            const response = AuthService.signIn(dataToLogin);

            toast.promise(response, {
                pending: 'Waiting...',
            });

            await response;

            return response as Promise<SignInResponseType>;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        resetLogin: (state) => {
            state.isLogin = false;
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
            state.data = requiredData;
            state.isAuth = true;
            state.isLogin = true;
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
