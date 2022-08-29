import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import Home from './components/home/Home';
import UserProfile from './components/profile/UserProfile';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading!</div>;
    }

    return (
        <div id="app" className="d-flex flex-column h-100">
            <NavBar />
            <div className="container flex-grow-1">
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
        </div>
    );
}

export default App;
