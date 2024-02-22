import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let isSignedIn = true;

  return isSignedIn ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoutes;
