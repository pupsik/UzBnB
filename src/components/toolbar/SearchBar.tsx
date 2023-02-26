import * as Styled from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const SearchBar = () => {
    return (
        <Styled.SearchDiv>
            <Styled.ButtonFirst>Where</Styled.ButtonFirst>
            <Styled.ButtonBetween>Check in</Styled.ButtonBetween>
            <Styled.ButtonBetween>Check out</Styled.ButtonBetween>
            <Styled.ButtonLast>
                Who
                <Styled.SearchButtonDiv>
                <IconButton color="primary">
                    <SearchIcon />
                </IconButton>
                </Styled.SearchButtonDiv>
            </Styled.ButtonLast>
        </Styled.SearchDiv>
    );
};

export default SearchBar;
