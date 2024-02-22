import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./localStorageHelper";

const PrivateRoutes = () => {
  const user = JSON.parse(getLocalStorageItem("user"));
  let isSignedIn = !!user?.userName;

  return isSignedIn ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoutes;
