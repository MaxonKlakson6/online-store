import { MouseEvent } from 'react';
import styled from '@emotion/styled';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import Typography from 'components/Typography';

import { useAppSelector } from 'hooks';

import colors from 'static/colors/colors.scss';

const CounterPanel = styled.div`
    width: fit-content;
    border: 1px solid ${colors.green};
    display: flex;
    align-items: center;
    gap: 10px;
`;

const CounterText = styled(Typography)`
    font-size: 18px;
    text-align: center;
`;

const Minus = styled(RemoveIcon)`
    color: ${colors.green};
`;

const Plus = styled(AddIcon)`
    color: ${colors.green};
`;

const Button = styled.button`
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;

    &:disabled svg {
        color: ${colors.grey};
    }
    &:disabled {
        cursor: auto;
    }
`;

interface CounterProps {
    id: number;
    count: number;
    isHasTitle: boolean;
    onIncrement: (event: MouseEvent, id: number, count: number) => void;
    onDecrement: (event: MouseEvent, id: number, count: number) => void;
}

const Counter = ({
    onIncrement,
    onDecrement,
    id,
    count,
    isHasTitle,
}: CounterProps): JSX.Element => {
    const isLoading = useAppSelector((state) => state.cart.isLoading);
    return (
        <div>
            {isHasTitle && <CounterText>Quantity</CounterText>}
            <CounterPanel>
                <Button
                    type="button"
                    disabled={count === 1}
                    onClick={(event: MouseEvent) => {
                        event.stopPropagation();
                        if (!isLoading) {
                            onDecrement(event, id, count);
                        }
                    }}
                >
                    <Minus />
                </Button>
                <CounterText>{count}</CounterText>
                <Button
                    type="button"
                    onClick={(event: MouseEvent) => {
                        event.stopPropagation();
                        if (!isLoading) {
                            onIncrement(event, id, count);
                        }
                    }}
                >
                    <Plus />
                </Button>
            </CounterPanel>
        </div>
    );
};

export default Counter;
