import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from "./components/loading";
import ProtectedRoute from './components/protected_route';
import UserContextProvider from './context/user';
import Register from './pages/register';
import SharedLayout from './pages/shared_layout';


const LoginPage = lazy(() => import('./pages/login'));
const HomePage = lazy(() => import('./pages/home'));
const ProfilePage = lazy(() => import('./pages/profile'));
const ErrorPage = lazy(() => import('./pages/error'));

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                            <ProtectedRoute>
                                <UserContextProvider>
                                    <SharedLayout />
                                </UserContextProvider>
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={
                            <Suspense fallback={<Loading />}>
                                <HomePage /> 
                            </Suspense>
                        } />
                        <Route path='profile' element={
                            <Suspense fallback={<Loading />}>
                                <ProfilePage /> 
                            </Suspense>
                        } />
                    </Route>
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/login" element={
                        <Suspense fallback={<Loading />}>
                            <LoginPage /> 
                        </Suspense>
                    } />
                    <Route path="*" element={
                        <Suspense fallback={<Loading />}>
                            <LoginPage /> 
                        </Suspense>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App;