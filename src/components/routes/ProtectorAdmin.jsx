import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({usuarioLogueado}) => {
    if(!usuarioLogueado){
        return <Navigate to={"/"}></Navigate>
    }
    return <Outlet></Outlet>
};

export default ProtectorAdmin;