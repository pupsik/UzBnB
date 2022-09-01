import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AuthenticationButton from '../auth/AuthenticationButton';

const StyledAppBar = styled(AppBar)`
    &.css-1hnd8vf-MuiPaper-root-MuiAppBar-root {
        background: transparent;
    }
`;

const ButtonAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: '5px', marginBottom: '20px' }}>
            <StyledAppBar position="static">
                <Toolbar>
                    <IconButton
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
                    </Typography>
                    <AuthenticationButton />
                </Toolbar>
            </StyledAppBar>
        </Box>
    );
};

export default ButtonAppBar;
