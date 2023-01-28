import React, { FC } from "react";
import moment from "moment";


import style from "./UserList.module.scss";
import { UserProfileDetailsProps } from "../../services/DataProvider";

interface UserListProps {
  user: UserProfileDetailsProps;
}

const UserList: FC<UserListProps> = ({ user }) => {
  return (
    <div>
      
      <div className={style.userListContainer}>
        <h6 style={{ display: "flex", flex: "1" }}>{user.teamname}</h6>
        <h6 style={{ display: "flex", flex: "1" }}>{user.email}</h6>
        <h6 style={{ display: "flex", flex: "1" }}>{user.role}</h6>

        <h6 style={{ display: "flex", flex: "1" }}> {moment(user.date).format("MMM Do YY")}</h6>

        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default UserList;
