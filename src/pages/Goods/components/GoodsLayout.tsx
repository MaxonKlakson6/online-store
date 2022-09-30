import Header from 'components/Header';
import banner from 'static/images/banner.jpg';
import icon from 'static/icons/bulbasaur_icon-icons.com_67580.png';
import styled from '@emotion/styled';
import BlockHeader from 'pages/Goods/components/BlockHeader';
import Card from 'components/Card';

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

interface GoodsLayoutProps {
    products: any;
}

const text = 'Welcome to our pokeshop!';
const GoodsLayout = ({ products }: GoodsLayoutProps) => (
    <div>
        <Header location={0} />
        <ImageHolder>
            <ImageContentBlock>
                <BlockHeader image={icon} text={text} title="Pokeshop" />
            </ImageContentBlock>
        </ImageHolder>
        <ProductsBlock>
            <BlockHeader
                text="Order it for you or for your beloved ones "
                title="Products"
            />
            <div>
                {products &&
                    products.data.map((product: any) => (
                        <Card
                            key={product.id}
                            image={product.image}
                            alt="aboba"
                            title={product.name}
                        />
                    ))}
            </div>
        </ProductsBlock>
    </div>
);

export default GoodsLayout;
