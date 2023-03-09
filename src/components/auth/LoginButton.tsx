import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => loginWithRedirect()}
            sx={{ minWidth: '90px' }}
        >
            <strong>Log In</strong>
        </Button>
    );
};

export default LoginButton;
