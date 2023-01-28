import React, { useContext, ReactNode, FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { UserContext } from "../contextapi/UserContext";

interface SubscriberSecureLayoutProps {
    children:ReactNode
}

const SubscriberSecureLayout:FC<SubscriberSecureLayoutProps> = ({children}) => {
    let location = useLocation();

    const [userstate] = useContext(UserContext);
  
    return userstate?.user ? (
      <> {children}</>
    ) : (
      <Navigate to="/" replace state={{ from: location }} />
    );
}

export default SubscriberSecureLayout