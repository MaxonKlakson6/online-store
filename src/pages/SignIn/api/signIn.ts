import { api } from 'api/apiConfig';

import { SignInTypes } from 'pages/SignIn/types/SignInTypes';
import { ResponseType } from 'pages/SignIn/types/ResponseType';

export const signIn = async (
    userData: SignInTypes
): Promise<ResponseType | any> => {
    try {
        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });

        const response = await api.post('/auth/signIn', userData);

        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
