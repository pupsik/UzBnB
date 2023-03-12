import { Outlet, Route, Routes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

import './App.css';
import ProtectedRoute from './auth/ProtectedRoute';
import UserAccount from './components/account/UserAccount';
import theme from './theme/ThemeProvider';
import HomePage from './views/HomePage';
import PropertyPage from './views/PropertyPage';
import UserProfile from './views/UserProfilePage';

// Injecting themes and making them available to styled components
// https://medium.com/@abdurakhimov.sardor/how-to-use-and-customize-material-ui-version-5-with-styled-components-295e62562e61

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading!</div>;
    }

    return (
        <StyledEngineProvider injectFirst>
            {/* Injecting themes both ways -- there must be a better way */}
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <div id="app" className="d-flex flex-column h-100">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/property/:id"
                                element={<PropertyPage />}
                            />
                            <Route path="/book/:id" element={<Outlet />} />
                            <Route
                                path="account-settings"
                                element={
                                    <ProtectedRoute>
                                        <UserAccount />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="user"
                                element={
                                    <ProtectedRoute>
                                        <UserProfile />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </div>
                </ThemeProvider>
            </MuiThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
