import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./localStorageHelper";

/**
 * Private Routes for routes to be protected when accessing routes when signed in or not
 *
 * Navigates user based from current sign on details
 */

const PrivateRoutes = () => {
  const user = JSON.parse(getLocalStorageItem("user"));
  let isSignedIn = !!user?.userName;

  return isSignedIn ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoutes;
