import styled from '@emotion/styled';

import icon from 'static/icons/bulbasaur-seeklogo.com.svg';

const AppIcon = styled.img`
    width: 50px;
    height: 50px;
`;

interface IconProps {
    className?: string;
}

const Icon = ({ className }: IconProps) => (
    <AppIcon src={icon} alt="icon" className={className} />
);

Icon.defaultProps = {
    className: '',
};

export default Icon;
