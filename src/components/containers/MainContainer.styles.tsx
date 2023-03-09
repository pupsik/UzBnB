import styled from 'styled-components';
import { Container } from '@mui/material';

// Overriding media queries: https://jsramblings.com/how-to-use-media-queries-with-styled-components/
export const MainContainer = styled(Container)`
    //border: 1px solid #000;
    //background-color: #fcf9f6;
    // background-size: cover;
    // background-repeat: no-repeat
    background-position: center;
    //  display: flex;
    width: 85vw;
    height: 100vh;
    max-width: none;
    align-items: center;
    /* @media (max-width: none) {
        max-width: none;
        width: 85vw;
    } */
`;

export const MainContainerNarrow = styled(Container)`
    background-position: center;
    //  display: flex;
    width: 85vw;
    height: 100vh;
    max-width: 1400px;
    align-items: center;
`;
