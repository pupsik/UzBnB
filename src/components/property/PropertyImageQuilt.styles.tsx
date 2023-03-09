import styled from 'styled-components';

export const QuiltDiv = styled.div`
    @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
        display: none;
    }
`;

export const CarouselDiv = styled.div`
    @media (min-width: ${(props) => props.theme.breakpoints.values.md + 1}px) {
        display: none;
    }
`;
