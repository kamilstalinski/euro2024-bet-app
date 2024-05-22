import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

export default function PrivateRoutes() {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to='/' />;
}
