import styled from '@emotion/styled';

import BaseLayout from 'components/BaseLayout';
import { ROUTE_NAMES } from 'router/routeNames';
import Typography from 'components/Typography';
import { TEXT } from 'constants/text';

import whatIsPokeshopImage from 'static/images/What-is-pokeshop.jpg';
import pokeshopProducts from 'static/images/Pokeshop-products.png';

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 50px auto 0;
`;

const Post = styled.div`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 100px;
    }
`;

const TextHolder = styled.div`
    flex-grow: 1;
`;

const PostTitle = styled(Typography)`
    padding-left: 30px;
`;

const PostText = styled(Typography)`
    margin-top: 30px;
    max-width: 700px;
`;

const PostImage = styled.img`
    height: 300px;
`;

const ImageHolder = styled.div`
    flex-grow: 2;
`;

const AboutLayout = (): JSX.Element => (
    <BaseLayout location={ROUTE_NAMES.ABOUT}>
        <Wrapper>
            <Post>
                <TextHolder>
                    <PostTitle variant="h4">What is Pokeshop?</PostTitle>
                    <PostText>{TEXT.WHAT_IS_POKESHOP}</PostText>
                </TextHolder>
                <PostImage src={whatIsPokeshopImage} alt="Pokemons" />
            </Post>
            <Post style={{ justifyContent: 'flex-end' }}>
                <ImageHolder>
                    <PostImage src={pokeshopProducts} alt="Pokemons" />
                </ImageHolder>
                <TextHolder>
                    <PostTitle variant="h4">Pokeshop products</PostTitle>
                    <PostText>{TEXT.POKESHOP_PRODUCTS}</PostText>
                </TextHolder>
            </Post>
        </Wrapper>
    </BaseLayout>
);

export default AboutLayout;
