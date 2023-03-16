import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect()}
            sx={{ minWidth: '90px' }}
        >
            <Typography>Log In</Typography>
        </Button>
    );
};

export default LoginButton;
