import React, { useContext, ReactNode, FC, useEffect, useState } from "react";
import { Navigate, useLocation,useNavigate } from "react-router-dom";

import { UserContext } from "../contextapi/UserContext";
import { getUserRoleForAdmin } from "../services/API";

interface AdminSecureLayoutProps {
  children: ReactNode;
}

const AdminSecureLayout: FC<AdminSecureLayoutProps> = ({ children }) => {
  let location = useLocation();
  let navigate = useNavigate();

  const [userstate, setState] = useContext(UserContext);

  const loadCurrentUserAdminRole = async () => {
    try {
      const res = await getUserRoleForAdmin();

    } catch (error) {
        navigate("/");
    }
  };

  useEffect(() => {

    if (userstate && userstate.token) loadCurrentUserAdminRole();


  }, [userstate && userstate.token]);

//   return <div>{children}</div>;

return userstate?.user ? (
    <> {children}</>
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );


};

export default AdminSecureLayout;
