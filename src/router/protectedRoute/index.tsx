import { Navigate } from "react-router";

interface ProtectedRouteType{
    user: any,
    children: React.ReactNode,
}

export function ProtectedRoute({ children,user }:ProtectedRouteType){
    return user ? <>{children}</> : <Navigate to={'/login'}/>
};