import React, { lazy } from "react";
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Register from './pages/register';


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
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/profile" element={ <ProfilePage /> } />
                </Router>
            </BrowserRouter>
        </>
    )
}


export default App;