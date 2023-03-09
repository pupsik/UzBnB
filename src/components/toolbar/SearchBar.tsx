import { FormControl, Input, InputAdornment, TextField } from '@mui/material';
import * as Styled from './SearchBar.styles';
import SearchIcon from '@mui/icons-material/Search';

import { search } from 'superagent';

const SearchBar = ({ setSearchQuery }) => {
    return (
        <Styled.SearchDiv>
            <TextField
                id="search-bar"
                className="search-bar__input"
                onInput={(e) => {
                    setSearchQuery(e);
                }}
                // label="Enter a city name"
                variant="outlined"
                placeholder="Start searching"
                size="small"
                
                // sx={{
                //     '& label': { paddingLeft: (theme) => theme.spacing(2) },
                //     '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                //     '& fieldset': {
                //       paddingLeft: (theme) => theme.spacing(2.5),
                //       borderRadius: '30px',
                //     },
                //   }}
            />
            <Styled.SearchIconButton
                type="submit"
                aria-label="search"
                className="search-bar__search-btn"
                sx={{marginLeft: "0.2rem"}}
            >
                <SearchIcon className="search-bar__search-icon" />
            </Styled.SearchIconButton>
        </Styled.SearchDiv>
    );
};

export default SearchBar;
