import { TableCell, TableRow as MuiTableRow } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';

import Counter from 'components/Counter';
import Button from 'components/Button/Button';

import { QuantityFunction } from 'hooks/useCart';

import colors from 'static/colors/colors.scss';

const Image = styled.img`
    width: 160px;
    background-color: ${colors.imageBackgroundGrey};
`;

const ButtonDeleteHolder = styled(TableCell)`
    border-top: 1px solid rgb(224, 224, 224);
`;

const ButtonDelete = styled(Button)`
    position: absolute;
    right: 0;
    top: calc(50% - 12px);
    border: 1px solid ${colors.green};

    &:hover {
        background-color: #fff;
        color: ${colors.green};
    }
`;

const TableRow = styled(MuiTableRow)`
    position: relative;
`;

interface TableItemProps {
    image: string;
    price: number;
    quantity: number;
    id: number;
    onIncrementQuantity: QuantityFunction;
    onDecrementQuantity: QuantityFunction;
    onRemoveCartItem: (id: number) => void;
}

const TableItem = ({
    image,
    price,
    quantity,
    id,
    onIncrementQuantity,
    onDecrementQuantity,
    onRemoveCartItem,
}: TableItemProps): JSX.Element => {
    const totalPrice = price * quantity;

    return (
        <TableRow>
            <TableCell>
                <Image src={image} alt="product" />
            </TableCell>
            <TableCell>{`${price}$`}</TableCell>
            <TableCell>
                <Counter
                    id={id}
                    count={quantity}
                    isHasTitle={false}
                    onIncrement={onIncrementQuantity}
                    onDecrement={onDecrementQuantity}
                />
            </TableCell>
            <TableCell>{`${totalPrice}$`}</TableCell>
            <ButtonDeleteHolder>
                <ButtonDelete onClick={() => onRemoveCartItem(id)}>
                    <CloseIcon />
                </ButtonDelete>
            </ButtonDeleteHolder>
        </TableRow>
    );
};

export default TableItem;
