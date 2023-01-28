import React, { FC } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

import style from "./UserList.module.scss";
import { UserProfileDetailsProps } from "../../services/DataProvider";
import { deleteUserAccount } from "../../services/API";

interface UserListProps {
  user: UserProfileDetailsProps;
}

const UserList: FC<UserListProps> = ({ user }) => {
  /****************************************/
  /**** Delete User Account     ***********/
  /****************************************/

  const onClickDeleteUserAccount = async () => {
    try {
      const res = await deleteUserAccount(user._id);

      if(res){

        toast.success("User Account Deleted Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

      }

    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <div className={style.userListContainer}>
        <h6 style={{ display: "flex", flex: "1" }}>{user.teamname}</h6>
        <h6 style={{ display: "flex", flex: "1" }}>{user.email}</h6>
        <h6 style={{ display: "flex", flex: "1" }}>{user.role}</h6>

        <h6 style={{ display: "flex", flex: "1" }}>
          {" "}
          {moment(user.date).format("MMM Do YY")}
        </h6>

        <button
          className="btn btn-danger"
          onClick={() => onClickDeleteUserAccount()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserList;
