import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const SearchDiv = styled.div`
    margin-left: 25%;
    margin-right: 25%;
    width: 100%;

    border: 1px solid #b0b0b0;
    border-radius: 32px;
    min-height: 65px;
    display: flex;
    align-items: center;
    position: relative;
`;

const Button = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    &:hover {
        margin: -2px;
        border-radius: 32px;
        border: 1px solid #e9e6e6;;
        background-color: #e9e6e6;
        min-height: 65px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    }

`;

export const ButtonFirst = styled(Button)`
    width: 30%;
    border-right: 1px solid #b0b0b0;
    height: 25px;
`;

export const ButtonBetween = styled(Button)`
    width: 20%;
    border-right: 1px solid #b0b0b0;
    height: 25px;
`;

export const ButtonLast = styled(Button)`
    width: 30%;
    display: flex;
    justify-content: space-around;
`;


export const SearchButtonDiv = styled.div`
    float: right;
`;