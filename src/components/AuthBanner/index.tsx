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
    buttonText: string;
    routeTo: string;
    innerText?: string;
}

const AuthBanner: FC<AuthProps> = ({
    title,
    innerText,
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
            <TextBox>{innerText}</TextBox>
            <GreenButton onClick={onNavigate}>{buttonText}</GreenButton>
        </Wrapper>
    );
};

AuthBanner.defaultProps = {
    innerText: '',
};

export default AuthBanner;
