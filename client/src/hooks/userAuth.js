import { Navigate, Outlet } from "react-router-dom";
const userAuth = () => {
  const user = localStorage.getItem("username");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = userAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
