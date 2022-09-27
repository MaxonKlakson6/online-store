import { PasswordVisibility } from 'types/PasswordVisibility';

export interface ConfirmAndPasswordVisibility extends PasswordVisibility {
    confirm: boolean;
}
