import { MouseEvent } from 'react';
import { CardMedia } from '@mui/material';
import { capitalize } from 'lodash';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Typography from 'components/Typography';
import {
    CardHolder,
    StyledCard,
    CardInfoBlock,
    ButtonAddToCart,
} from 'components/Card/StyledComponents';
import { Title } from 'components/styled/Title';

interface CardProps {
    image: string;
    alt: string;
    title: string;
    price: number;
    id: number;
    handleNavigateToProduct: (
        event: MouseEvent<HTMLDivElement>,
        id: number
    ) => void;
}

const Card = ({
    image,
    alt,
    title,
    price,
    id,
    handleNavigateToProduct,
}: CardProps) => {
    const handleAddToCart = (event: MouseEvent) => {
        event.stopPropagation();
        console.log('Add to cart');
    };

    return (
        <CardHolder onClick={(event) => handleNavigateToProduct(event, id)}>
            <StyledCard>
                <CardMedia
                    component="img"
                    height="154"
                    image={image}
                    alt={alt}
                />
                <CardInfoBlock>
                    <div style={{ flexGrow: 1 }}>
                        <Title variant="h5">{capitalize(title)}</Title>
                        <Typography>{`${price}$`}</Typography>
                    </div>
                    <ButtonAddToCart type="button" onClick={handleAddToCart}>
                        <AddShoppingCartIcon />
                    </ButtonAddToCart>
                </CardInfoBlock>
            </StyledCard>
        </CardHolder>
    );
};

export default Card;
