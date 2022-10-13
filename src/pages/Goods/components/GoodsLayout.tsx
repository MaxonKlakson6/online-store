import { ChangeEvent, MouseEvent } from 'react';
import styled from '@emotion/styled';

import BlockHeader from 'pages/Goods/components/BlockHeader';
import ProductsHolder from 'pages/Goods/components/ProductsBlock';
import Pagination from 'components/Pagination';

import Progress from 'components/Progress';

import { NewCartItem } from 'services/CartService/types';
import { QuantityFunction } from 'hooks/useCart';

import { TEXT } from 'constants/text';
import banner from 'static/images/banner.jpg';
import icon from 'static/icons/bulbasaur_icon-icons.com_67580.png';

const ImageHolder = styled.div`
    width: 900px;
    height: 492px;
    margin: 50px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${banner});
`;

const ImageContentBlock = styled.div`
    padding: 30px;
    background: rgba(247, 248, 250, 0.7);
`;

const ProductsBlock = styled.div`
    width: 1440px;
    margin: 50px auto 0;
`;

const ProductsPagination = styled(Pagination)`
    width: fit-content;
    margin: 20px auto;
`;

const StyledProgress = styled(Progress)`
    margin: 0 auto;
`;

interface GoodsLayoutProps {
    isLoading: boolean;
    page: number;
    handleChangePage: (event: ChangeEvent<unknown>, page: number) => void;
    handleNavigateToProduct: (
        event: MouseEvent<HTMLDivElement>,
        id: number
    ) => void;
    handleAddProduct: (itemToAdd: NewCartItem) => void;
    handleIncrementQuantity: QuantityFunction;
    handleDecrementQuantity: QuantityFunction;
}

const GoodsLayout = ({
    isLoading,
    page,
    handleChangePage,
    handleNavigateToProduct,
    handleAddProduct,
    handleIncrementQuantity,
    handleDecrementQuantity,
}: GoodsLayoutProps): JSX.Element => (
    <div>
        <ImageHolder>
            <ImageContentBlock>
                <BlockHeader
                    image={icon}
                    text={TEXT.WELCOME}
                    title="Pokeshop"
                />
            </ImageContentBlock>
        </ImageHolder>
        <ProductsBlock>
            <BlockHeader text={TEXT.PRODUCTS_HEADER_TEXT} title="Products" />
            {isLoading ? (
                <StyledProgress />
            ) : (
                <ProductsHolder
                    handleNavigateToProduct={handleNavigateToProduct}
                    handleAddProduct={handleAddProduct}
                    handleIncrementQuantity={handleIncrementQuantity}
                    handleDecrementQuantity={handleDecrementQuantity}
                />
            )}
        </ProductsBlock>
        <ProductsPagination
            disabled={isLoading}
            count={10}
            onChange={handleChangePage}
            page={page}
        />
    </div>
);

export default GoodsLayout;
