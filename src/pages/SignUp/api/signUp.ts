import { UserTypesToSignUp } from 'pages/SignUp/types/UserTypesToSignUp';
import { api } from 'api/apiConfig';

export const signUp = async (userData: UserTypesToSignUp | undefined) => {
    const response = await api.post('/auth/signup', userData);

    return response.data;
};