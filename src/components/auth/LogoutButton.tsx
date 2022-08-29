import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <Button
            className="btn btn-danger btn-block"
            variant="contained"
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
        >
            Log Out
        </Button>
    );
};

export default LogoutButton;
