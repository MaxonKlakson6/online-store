export const REGEXP = {
    PASSWORD_VALIDATION:
        /(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
    PHONE_VALIDATION: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g,
};
