import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import theme from './theme/ThemeProvider';
import UserProfile from './components/profile/UserProfile';
import ProtectedRoute from './auth/ProtectedRoute';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

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
                        <Route path="/" element={<Home />} />
                        <Route
                            path="profile"
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
