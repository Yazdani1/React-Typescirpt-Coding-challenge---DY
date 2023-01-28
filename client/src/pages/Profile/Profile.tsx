import React, { useContext } from "react";

import { UserContext } from "../../contextapi/UserContext";
import style from "./Profile.module.scss";
import CardLayout from "../../components/CardLayout/CardLayout";
import SubscriberPageLayout from "../../layouts/SubscriberPageLayout";

const Profile = () => {
  const [userDetails] = useContext(UserContext);

  return (
    <SubscriberPageLayout>
      <div>
        <CardLayout title="Account Details">
          <div className={style.profileInfo}>
            <h6>{userDetails.user?.teamname}</h6>
          </div>
          <div className={style.profileInfo}>
            <h6>{userDetails.user?.email}</h6>
          </div>
          <div className={style.profileInfo}>
            <h6>{userDetails.user?.date}</h6>
          </div>
        </CardLayout>
      </div>
    </SubscriberPageLayout>
  );
};

export default Profile;
