import MuiCard from '@mui/material/Card';
import { CardMedia, CardContent } from '@mui/material';
import Typography from 'components/Typography';
import styled from '@emotion/styled';

interface CardProps {
    image: string;
    alt: string;
    title: string;
}

const StyledCard = styled(MuiCard)`
    width: 255px;
`;

const Card = ({ image, alt, title }: CardProps) => (
    <StyledCard>
        <CardMedia component="img" height="154" image={image} alt={alt} />
        <CardContent>
            <Typography variant="h5">{title}</Typography>
        </CardContent>
    </StyledCard>
);

export default Card;
