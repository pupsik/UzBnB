import styled from 'styled-components';
import { Container } from '@mui/material';

// Overriding media queries: https://jsramblings.com/how-to-use-media-queries-with-styled-components/
export const MainContainer = styled(Container)`
    //border: 1px solid #000;
    //background-image: url(${(props) => props.img});
    background-color: #fcf9f6;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    max-width: none;
    @media (max-width: none) {
        max-width: none;
        width: 100vw;
    }
`;

// &.css-1oqqzyl-MuiContainer-root {
//     margin-left: 0;
//     margin-right: 0;
//     max-width: none;
// }
