import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { auth } = useAuth();

    return auth?.id ? <Outlet /> : <Navigate to="/" replace={true} />;
}

export default ProtectedRoute;