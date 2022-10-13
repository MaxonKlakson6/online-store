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
`;

const TableRow = styled(MuiTableRow)`
    position: relative;
`;

interface TableItemProps {
    image: string;
    price: number;
    total: number;
    quantity: number;
    id: number;
    onIncrementQuantity: QuantityFunction;
    onDecrementQuantity: QuantityFunction;
    onRemoveCartItem: (id: number) => void;
}

const TableItem = ({
    image,
    price,
    total,
    quantity,
    id,
    onIncrementQuantity,
    onDecrementQuantity,
    onRemoveCartItem,
}: TableItemProps): JSX.Element => (
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
        <TableCell>{`${total}$`}</TableCell>
        <ButtonDeleteHolder>
            <ButtonDelete onClick={() => onRemoveCartItem(id)}>
                <CloseIcon />
            </ButtonDelete>
        </ButtonDeleteHolder>
    </TableRow>
);

export default TableItem;
