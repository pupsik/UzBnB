import styled from 'styled-components';
import Box from '@mui/material/Box';

export const ToolBarContainer = styled(Box)`
    background-color: #fff;
    border-bottom: 2px solid ${(props) => props.theme.palette.grey[100]};
    padding: 0.5rem 1rem;
    //right: 5%;
    //left: 5%;
    width: 100%;
    display: inline-block;
    height: 15vh;
    z-index: 100;

    .toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0;
    }

    .toolbar__logo {
        width: 10%;
        height: 10vh;
        object-fit: cover;
        object-position: center;

        cursor: pointer;

        @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
            display: none;
        }
    }
`;
