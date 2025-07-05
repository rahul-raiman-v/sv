import { Navigate } from "react-router";

interface PublicRouteType{
    user: any,
    children: React.ReactNode,
}

export function PublicRoute({ user,children }:PublicRouteType){
    return user ? <Navigate to={'/'} replace/> : <>{children}</>
};