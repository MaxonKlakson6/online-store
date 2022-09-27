type Touched = Record<string, boolean>;
type Errors = Record<string, string>;

export interface AuthFormsProps {
    touched: Touched;
    errors: Errors;
    isValid: boolean;
    isLoading: boolean;
    dirty: boolean;
    onSubmit: () => void;
    onBlur: (event: any) => void;
}
