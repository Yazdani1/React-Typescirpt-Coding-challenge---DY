import React, { FC, ReactNode } from "react";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";

interface AdminPageLayoutProps {
  children: ReactNode;
}
const AdminPageLayout: FC<AdminPageLayoutProps> = ({ children }) => {
  return (
    <div className="container-fluid">
      <NavbarAdmin />

      <div className="container">{children}</div>
    </div>
  );
};

export default AdminPageLayout;
