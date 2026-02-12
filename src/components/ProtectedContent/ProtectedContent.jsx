import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export const ProtectedContent = () =>{
    const { user } = useContext(UserContext);
    

    return user ? <Outlet /> : <Navigate to="/"/>
}