import { FC, ReactNode } from 'react';

import Wrapper from 'components/styled/Auth/AuthLayoutWrapper';
import AuthHolder from 'components/styled/Auth/AuthHolder';

interface SignUpProps {
    children: ReactNode;
}

const SignUpLayout: FC<SignUpProps> = ({ children }) => (
    <Wrapper>
        <AuthHolder>{children}</AuthHolder>
    </Wrapper>
);

export default SignUpLayout;
