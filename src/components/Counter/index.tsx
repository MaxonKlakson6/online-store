import { Title } from 'components/styled/Title';
import styled from '@emotion/styled';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import colors from 'static/colors/colors.scss';
import Typography from 'components/Typography';

const CounterPanel = styled.div`
    width: fit-content;
    border: 1px solid ${colors.green};
    display: flex;
    align-items: center;
    gap: 10px;
`;

const CounterText = styled(Typography)`
    font-size: 18px;
`;

const Minus = styled(RemoveIcon)`
    color: ${colors.green};
`;

const Plus = styled(AddIcon)`
    color: ${colors.green};
`;

const Counter = () => (
    <div>
        <CounterText>Quantity</CounterText>
        <CounterPanel>
            <Minus />
            <CounterText>1</CounterText>
            <Plus />
        </CounterPanel>
    </div>
);

export default Counter;
