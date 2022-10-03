import { UserTypesToSignUp } from 'pages/SignUp/types/UserTypesToSignUp';

export interface ResponseType extends UserTypesToSignUp {
    _id: string;
    accessToken: string;
}
