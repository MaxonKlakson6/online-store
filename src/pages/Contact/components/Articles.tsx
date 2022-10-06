import Typography from 'components/Typography';
import styled from '@emotion/styled';
import colors from 'static/colors/colors.scss';

const ArticlesList = styled.ul`
    padding: 0;
    list-style-type: none;
    display: grid;
    gap: 20px;
    grid-template-columns: auto auto auto;
`;

const ArticleItem = styled.li`
    padding-bottom: 15px;
    border-bottom: 1px solid ${colors.grey};
    color: black;
`;

const Articles = () => (
    <ArticlesList>
        <ArticleItem>
            <Typography>Estimated Preorder Release Dates</Typography>
        </ArticleItem>
        <ArticleItem>
            <Typography>
                Can I change the address on my order or preorder?
            </Typography>
        </ArticleItem>
        <ArticleItem>
            <Typography>Special Delivery Charizard FAQ</Typography>
        </ArticleItem>
        <ArticleItem>
            <Typography>Pokémon Center Known Issues</Typography>
        </ArticleItem>
        <ArticleItem>
            <Typography>Order Cancelation Information</Typography>
        </ArticleItem>
        <ArticleItem>
            <Typography>
                I have a question about Pokémon, who do I contact?
            </Typography>
        </ArticleItem>
    </ArticlesList>
);

export default Articles;
