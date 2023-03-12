import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const SearchDiv = styled.div`
    display: inline-block;

    fieldset {
        border-radius: 40px;
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
