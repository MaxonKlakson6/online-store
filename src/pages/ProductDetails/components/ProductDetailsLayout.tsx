import List from 'pages/ProductDetails/components/List';
import InfoBlock from 'pages/ProductDetails/components/InfoBlock';
import {
    Wrapper,
    AbilitiesHolder,
    ProductTitle,
    ContentHolder,
    ImageHolder,
    Image,
} from 'pages/ProductDetails/components/StyledComponents';

import { ProductDetailsResponse } from 'services/ProductsService/types';

const ProductDetailsLayout = ({
    details,
}: {
    details: ProductDetailsResponse;
}) => (
    <Wrapper>
        <ContentHolder>
            <ImageHolder>
                <Image src={details.image} alt={details.name} />
            </ImageHolder>
            <InfoBlock />
        </ContentHolder>
        <AbilitiesHolder>
            <ProductTitle variant="h3">Abilities</ProductTitle>
            <List abilities={details.abilities} />
        </AbilitiesHolder>
    </Wrapper>
);

export default ProductDetailsLayout;
