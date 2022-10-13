import styled from '@emotion/styled';

import Typography from 'components/Typography';

import 'static/fonts/fonts.scss';
import colors from 'static/colors/colors.scss';

interface BlockHeaderProps {
    title: string;
    text: string;
    image?: string;
}

const Title = styled(Typography)`
    margin-bottom: 25px;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color: ${colors.titlesColor};
`;

const Text = styled(Typography)`
    margin-bottom: 25px;
    text-align: center;
    font-size: 18px;
    font-family: 'Helvetica';
    color: ${colors.titlesColor};
`;

const BlockHeader = ({ image, title, text }: BlockHeaderProps): JSX.Element => (
    <div>
        {image && (
            <div style={{ width: 'fit-content', margin: '0 auto' }}>
                <img src={image} alt="Aboba" />
            </div>
        )}
        <Title variant="h3">{title}</Title>
        <Text variant="subtitle1">{text}</Text>
    </div>
);

BlockHeader.defaultProps = {
    image: '',
};

export default BlockHeader;
