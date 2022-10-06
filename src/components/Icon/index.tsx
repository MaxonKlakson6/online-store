import styled from '@emotion/styled';

const AppIcon = styled.img`
    width: 50px;
    height: 50px;
`;

interface IconProps {
    src: string;
    alt: string;
    className?: string;
}

const Icon = ({ src, alt, className }: IconProps) => (
    <AppIcon src={src} alt={alt} className={className} />
);

Icon.defaultProps = {
    className: '',
};

export default Icon;
