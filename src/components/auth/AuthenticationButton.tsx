import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import UserAvatar from '../profile/UserAvatar';

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <UserAvatar /> : <LoginButton />;
};

export default AuthenticationButton;
