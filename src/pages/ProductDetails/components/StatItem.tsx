import { camelCase } from 'lodash';
import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import styled from '@emotion/styled';

import Icon from 'components/Icon';

import { Stat } from 'services/ProductsService/types';

import { statsIcons } from 'constants/statsIcons';

const StatItemIcon = styled(Icon)`
    width: 30px;
    height: 30px;
`;

const StatItem = ({ title, value }: Stat) => (
    <ListItem>
        <ListItemAvatar>
            <StatItemIcon src={statsIcons[camelCase(title)]} alt={title} />
        </ListItemAvatar>
        <ListItemText primary={title} secondary={value} />
    </ListItem>
);

export default StatItem;
