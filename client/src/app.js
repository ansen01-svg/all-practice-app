import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from "./components/loading";
import ProtectedRoute from './components/protected_route';
import UserContextProvider from './context/user';
import Login from './pages/login';
import SharedLayout from './pages/shared_layout';


const Register = lazy(() => import('./pages/register'));
const Home = lazy(() => import('./pages/home'));
const Profile = lazy(() => import('./pages/profile'));
const About = lazy(() => import('./pages/about'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Error = lazy(() => import('./pages/error'));

const App = () => {
    return (
        <>
            <Router>
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
                                <Home /> 
                            </Suspense>
                        } />
                        <Route path='profile' element={
                            <Suspense fallback={<Loading />}>
                                <Profile /> 
                            </Suspense>
                        } />
                        <Route path='about' element={
                            <Suspense fallback={<Loading />}>
                                <About /> 
                            </Suspense>
                        } />
                        <Route path='dashboard' element={
                            <Suspense fallback={<Loading />}>
                                <Dashboard /> 
                            </Suspense>
                        } />
                    </Route>
                    <Route path="register" element={
                        <Suspense fallback={<Loading />}>
                            <Register /> 
                        </Suspense>
                    } />
                    <Route path="login" element={ <Login /> } />
                    <Route path="*" element={
                        <Suspense fallback={<Loading />}>
                            <Error /> 
                        </Suspense>
                    } />
                </Routes>
            </Router>
        </>
    )
}


export default App;