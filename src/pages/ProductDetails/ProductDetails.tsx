import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    return <div>{`product ${id}`}</div>;
};

export default ProductDetails;
