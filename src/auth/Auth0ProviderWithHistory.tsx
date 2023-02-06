import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || '/');
    };
    const scope = 'read:stories';
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={`https://${domain}/api/v2/`} //https://github.com/auth0/auth0-react/issues/186#issuecomment-760552089
            scope={scope}
            useRefreshTokens={true}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
