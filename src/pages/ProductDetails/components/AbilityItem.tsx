import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import styled from '@emotion/styled';

import Icon from 'components/Icon';

import { Ability } from 'services/ProductsService/types';

import abilityIcon from 'static/icons/arrow.png';

const StatItemIcon = styled(Icon)`
    width: 30px;
    height: 30px;
`;

const AbilityItem = ({ title, description }: Ability) => (
    <ListItem>
        <ListItemAvatar>
            <StatItemIcon src={abilityIcon} alt={title} />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={description} />
    </ListItem>
);

export default AbilityItem;
