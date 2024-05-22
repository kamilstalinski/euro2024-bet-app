import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

export default function ProtectedRoutes() {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to='/login' />;
}
