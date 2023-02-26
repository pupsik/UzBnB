import styled from 'styled-components';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthenticationButton from '../auth/AuthenticationButton';
import SearchBar from './SearchBar';
import img from './logo.png';
import { Logo } from './ToolBar.styles';

// const StyledAppBar = styled(AppBar)`
//     &.css-1hnd8vf-MuiPaper-root-MuiAppBar-root {
//         background: transparent;
//     }
// `;

// const StyledAppBar = styled(AppBar)`
//     background-color: #fcf9f6;
// `;

const ButtonAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: '15px', marginBottom: '40px' }}>
            <Toolbar>
               <Logo src={img} alt="My Logo"/>
                {/* <IconButton
                    size="large"
                    edge="start"
                    color="default"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    color="black"
                >
                    About
                </Typography> */}
                <SearchBar />
                <AuthenticationButton />
            </Toolbar>
        </Box>
    );
};

export default ButtonAppBar;
