import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const SearchDiv = styled.div`
    display: inline-block;

    fieldset {
        border-radius: 40px;
    }
    .search-bar__input {
        @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
            width: 40vw;
        }
    }
`;

export const SearchIconButton = styled(IconButton)`
    border: 1px solid;
    background-color: ${(props) => props.theme.palette.primary.main};

    &:hover {
        background-color: ${(props) => props.theme.palette.primary.main};
    }

    .search-bar__search-icon {
        color: #fff;
    }
`;
