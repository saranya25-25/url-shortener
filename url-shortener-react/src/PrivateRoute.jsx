import { Navigate } from "react-router-dom";
import { useStoreContext } from "./contextApi/ContextApi";
import Loader from "./components/Loader";

export default function PrivateRoute({ children, publicPage }) {
    const { token, loading } = useStoreContext();

    // Wait until context checks local storage
    if (loading) {
        return <Loader />;
    }

    // Public pages (login/register)
    if (publicPage) {
        return token ? <Navigate to="/dashboard" replace /> : children;
    }

    // Private pages (dashboard)
    return token ? children : <Navigate to="/login" replace />;
}