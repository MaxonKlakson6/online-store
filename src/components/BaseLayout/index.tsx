import { FC, ReactNode } from 'react';

import Header from 'components/Header';

interface BaseLayoutProps {
    children: ReactNode;
    location: string;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, location }) => (
    <>
        <Header location={location} />
        {children}
    </>
);

export default BaseLayout;
