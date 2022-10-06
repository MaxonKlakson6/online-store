import { List as MuiList } from '@mui/material';
import styled from '@emotion/styled';

import StatItem from 'pages/ProductDetails/components/StatItem';
import AbilityItem from 'pages/ProductDetails/components/AbilityItem';

import { Ability, Stat } from 'services/ProductsService/types';

import colors from 'static/colors/colors.scss';

const DetailsBlock = styled(MuiList)`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid ${colors.grey};
    border-radius: 7px;
    display: grid;
    grid-template-columns: auto auto;
`;

const List = ({
    stats,
    abilities,
}: {
    stats?: Stat[];
    abilities?: Ability[];
}) => (
    <DetailsBlock>
        {stats &&
            stats.map(({ title, value }) => (
                <StatItem key={title} title={title} value={value} />
            ))}
        {abilities &&
            abilities.map(({ title, description }) => (
                <AbilityItem
                    key={title}
                    title={title}
                    description={description}
                />
            ))}
    </DetailsBlock>
);

List.defaultProps = {
    stats: null,
    abilities: null,
};

export default List;
