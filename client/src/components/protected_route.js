import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {

    const cookie = document.cookie;

    if(!cookie) {
        return <Navigate to='/login' />
    }

    return children;
}


export default ProtectedRoute;