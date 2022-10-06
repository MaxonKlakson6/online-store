export interface SignInTypes {
    email: string;
    password: string;
}

export interface UserTypesToSignUp {
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    password: string;
    phone: string;
}

export interface SignUpResponse {
    success: boolean;
    message: string;
}

export interface SignInResponseType extends UserTypesToSignUp {
    _id: string;
    accessToken: string;
}
