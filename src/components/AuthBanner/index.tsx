import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Wrapper,
    Title,
    GreenButton,
    TextBox,
} from 'components/AuthBanner/styledComponents';

export interface AuthProps {
    title: string;
    children?: string;
    buttonText: string;
    routeTo: string;
}

const AuthBanner: FC<AuthProps> = ({
    title,
    children,
    buttonText,
    routeTo,
}) => {
    const navigate = useNavigate();

    const onNavigate = (): void => {
        navigate(routeTo);
    };

    return (
        <Wrapper>
            <Title variant="h1">{title}</Title>
            <TextBox>{children}</TextBox>
            <GreenButton onClick={onNavigate}>{buttonText}</GreenButton>
        </Wrapper>
    );
};

AuthBanner.defaultProps = {
    children: '',
};

export default AuthBanner;
