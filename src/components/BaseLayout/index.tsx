import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

import Header from 'components/Header';
import Footer from 'components/Footer';

interface BaseLayoutProps {
    children: ReactNode;
    location: string | boolean;
    contentBackground?: string;
}

interface ContentHolderProps {
    background?: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentHolder = styled.div<ContentHolderProps>`
    padding-bottom: 30px;
    flex: 1 1 auto;
    background: ${(props) => props.background};
`;

const BaseLayout: FC<BaseLayoutProps> = ({
    children,
    location,
    contentBackground,
}) => (
    <Wrapper>
        <div>
            <Header location={location} />
        </div>
        <ContentHolder background={contentBackground}>{children}</ContentHolder>
        <Footer />
    </Wrapper>
);

BaseLayout.defaultProps = {
    contentBackground: '',
};

export default BaseLayout;
