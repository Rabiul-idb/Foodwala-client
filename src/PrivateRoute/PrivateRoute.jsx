import { useContext } from "react";
import { contextProvider } from "../AuthContex/AuthContex";
import Loading from "../Components/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading } = useContext(contextProvider);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={"/login"} state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;