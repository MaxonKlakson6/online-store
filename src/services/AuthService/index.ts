import axios from 'axios';

import { api } from 'api/apiConfig';

import { SignInTypes, UserTypesToSignUp } from 'services/AuthService/types';

const BASE_URL = '/auth';

class AuthService {
    static instance = new AuthService();

    async signIn(userData: SignInTypes) {
        try {
            const response = await api.post(`${BASE_URL}/signIn`, userData);

            if (axios.isAxiosError(response)) {
                throw response;
            }

            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

    async signUp(userData?: UserTypesToSignUp) {
        try {
            const response = await api.post(`${BASE_URL}/signup`, userData);

            if (axios.isAxiosError(response)) {
                throw response;
            }

            return response;
        } catch (error: any) {
            throw error.response.data;
        }
    }
}

export default AuthService.instance;
