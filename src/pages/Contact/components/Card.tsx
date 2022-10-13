import styled from '@emotion/styled';
import MuiCard from '@mui/material/Card';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';
import Typography from 'components/Typography';

import colors from 'static/colors/colors.scss';

const Wrapper = styled(MuiCard)`
    width: 263px;
    margin-bottom: 20px;
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    box-shadow: none;

    & button img {
        width: 200px;
        margin: 0 auto;
    }
`;

interface CardProps {
    image: string;
    alt: string;
    title: string;
}

const Card = ({ image, alt, title }: CardProps): JSX.Element => (
    <Wrapper>
        <CardActionArea>
            <CardMedia component="img" src={image} alt={alt} />
            <CardContent>
                <Typography>{title}</Typography>
            </CardContent>
        </CardActionArea>
    </Wrapper>
);

export default Card;
