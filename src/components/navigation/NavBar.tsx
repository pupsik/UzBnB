import UnauthNav from './UnauthNav';
import AuthNav from './AuthNav';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="nav-container mb-3">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <div className="navbar-brand logo" />
                    {isAuthenticated ? <AuthNav /> : <UnauthNav />}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
