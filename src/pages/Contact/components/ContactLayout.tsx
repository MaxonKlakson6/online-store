import BaseLayout from 'components/BaseLayout';
import { ROUTE_NAMES } from 'router/routeNames';
import styled from '@emotion/styled';
import Typography from 'components/Typography';

import colors from 'static/colors/colors.scss';

import Cards from 'pages/Contact/components/Cards';
import Articles from 'pages/Contact/components/Articles';

const Wrapper = styled.div`
    padding: 100px 0;
    height: 71.5vh;
    background-color: ${colors.transparentGreen};
`;

const Title = styled(Typography)`
    text-align: center;
`;

const ContentHolder = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 7px;
`;

const SectionTitle = styled(Typography)`
    font-weight: 500;
`;

const ContactLayout = () => (
    <BaseLayout location={ROUTE_NAMES.CONTACT}>
        <Wrapper>
            <ContentHolder>
                <Title variant="h5">Welcome to Pokémon Center Support</Title>
                <Cards />
                <SectionTitle variant="h6">Promoted articles</SectionTitle>
                <Articles />
            </ContentHolder>
        </Wrapper>
    </BaseLayout>
);

export default ContactLayout;
