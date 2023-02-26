import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import UserAvatar from '../account/UserMenu';

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <UserAvatar /> : <LoginButton />;
};

export default AuthenticationButton;
