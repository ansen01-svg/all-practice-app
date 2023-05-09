import React, { lazy } from "react";
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ProtectedRoute from './components/protected_route';
import Register from './pages/register';
import SharedLayout from './pages/shared_layout';


const LoginPage = lazy(() => import('./pages/login'));
const HomePage = lazy(() => import('./pages/home'));
const ProfilePage = lazy(() => import('./pages/profile'));

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Router>
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route 
                        path="/" 
                        element={
                            <ProtectedRoute>
                                <SharedLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={ <HomePage /> } />
                        <Route path="/profile/:user" element={ <ProfilePage /> } />
                    </Route>
                </Router>
            </BrowserRouter>
        </>
    )
}


export default App;