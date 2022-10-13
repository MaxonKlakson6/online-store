import BaseLayout from 'components/BaseLayout';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 50px auto 0;
`;

const ProfileLayout = () => (
    <BaseLayout location={false}>
        <Wrapper>Profile</Wrapper>
    </BaseLayout>
);

export default ProfileLayout;
