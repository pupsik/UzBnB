import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import theme from './theme/ThemeProvider';
import HomePage from './components/home/HomePage';
import ProtectedRoute from './auth/ProtectedRoute';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import UserAccount from './components/account/UserAccount';
import UserProfile from './components/profile/UserProfile';

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading!</div>;
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <div id="app" className="d-flex flex-column h-100">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
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
        </StyledEngineProvider>
    );
}

export default App;
