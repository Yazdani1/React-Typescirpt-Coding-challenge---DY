import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import AdminPageLayout from "../../layouts/AdminPageLayout";
import CardLayout from "../../components/CardLayout/CardLayout";
import { getAllUserList } from "../../services/API";
import { UserProfileDetailsProps } from "../../services/DataProvider";
import UserList from "./UserList";
import style from "./UserList.module.scss";

const Admin = () => {
  /****************************************/
  /********* User List     ***************/
  /****************************************/

  const [allUserList, setAllUserList] = useState<UserProfileDetailsProps[]>([]);

  const loadAllUserList = async () => {
    try {
      const res = await getAllUserList();

      if (res) {
        setAllUserList(res.data);
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    loadAllUserList();
  }, []);

  return (
    <AdminPageLayout>
      <CardLayout title="All Members List">
        <div className={style.userListContainer}>
          <h6 style={{ display: "flex", flex: "1" }}>Team Name:</h6>
          <h6 style={{ display: "flex", flex: "1" }}>E-mail:</h6>
          <h6 style={{ display: "flex", flex: "1" }}>Role:</h6>

          <h6 style={{ display: "flex", flex: "1" }}>Date:</h6>

          <button className="btn btn-info">Action</button>
        </div>

        {allUserList &&
          allUserList.map((user) => <UserList user={user} key={user._id} />)}
      </CardLayout>
    </AdminPageLayout>
  );
};

export default Admin;
