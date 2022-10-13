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
import { QuantityFunction } from 'hooks/useCart';
import { NewCartItem } from 'services/CartService/types';

interface ProductDetailsProps {
    details: ProductDetailsResponse;
    handleAddProduct: (itemToAdd: NewCartItem) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

const ProductDetailsLayout = ({
    details,
    handleAddProduct,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: ProductDetailsProps): JSX.Element => (
    <Wrapper>
        <ContentHolder>
            <ImageHolder>
                <Image src={details.image} alt={details.name} />
            </ImageHolder>
            <InfoBlock
                handleAddProduct={handleAddProduct}
                handleIncrementQuantity={handleIncrementQuantity}
                handleDecrementQuantity={handleDecrementQuantity}
            />
        </ContentHolder>
        <AbilitiesHolder>
            <ProductTitle variant="h3">Abilities</ProductTitle>
            <List abilities={details.abilities} />
        </AbilitiesHolder>
    </Wrapper>
);

export default ProductDetailsLayout;
