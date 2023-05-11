import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protected_route';
import UserContextProvider, { useUserContext } from './context/user';
import Register from './pages/register';
import SharedLayout from './pages/shared_layout';


const LoginPage = lazy(() => import('./pages/login'));
const HomePage = lazy(() => import('./pages/home'));
const ProfilePage = lazy(() => import('./pages/profile'));
const ErrorPage = lazy(() => import('./pages/error'));

const App = () => {

    const { user } = useUserContext();

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route
                        path="/" 
                        element={
                            <ProtectedRoute>
                                <UserContextProvider>
                                    <SharedLayout />
                                </UserContextProvider>
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={ <HomePage /> } />
                        <Route path={user.username} element={ <ProfilePage /> } />
                    </Route>
                    <Route path="*" element={ <ErrorPage /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App;