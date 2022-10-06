import { api } from 'api/apiConfig';

import { SignInTypes } from 'pages/SignIn/types/SignInTypes';
import { ResponseType } from 'pages/SignIn/types/ResponseType';
import axios from 'axios';

export const signIn = async (
    userData: SignInTypes
): Promise<ResponseType | any> => {
    try {
        const response = await api.post('/auth/signIn', userData);

        if (axios.isAxiosError(response)) {
            throw response;
        }

        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
