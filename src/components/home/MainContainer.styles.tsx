import styled from 'styled-components';
import { Container } from '@mui/material';

export const MainContainer = styled(Container)`
    //border: 1px solid #000;
    //background-image: url(${(props) => props.img});
    background-color: #fcf9f6;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 200vw;
    height: 200vh;

    &.css-1oqqzyl-MuiContainer-root {
        margin-left: 0;
        margin-right: 0;
        max-width: none;
    }
`;
