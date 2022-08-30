import styled from 'styled-components';
import { Container } from '@mui/material';

export const HomeContainer = styled(Container)`
    //border: 1px solid #000;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;

    &.css-1oqqzyl-MuiContainer-root {
        margin-left: 0;
        margin-right: 0;
        max-width: none;
    }
`;
