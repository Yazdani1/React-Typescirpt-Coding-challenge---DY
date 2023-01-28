import React, { useState, useEffect, useContext } from "react";

import style from "./Dashboard.module.scss";
import SubscriberPageLayout from "../../layouts/SubscriberPageLayout";
import { getPlayerList } from "../../services/API";
import { PlayerListProps } from "../../services/DataProvider";
import CardLayout from "../../components/CardLayout/CardLayout";
import { UserContext } from "../../contextapi/UserContext";
import PlayerListCard from "./PlayerListCard";

const Dashboard = () => {
  //Context API to show user info

  const [userDetails] = useContext(UserContext);

  /****************************************/
  /*********  Player List     *************/
  /****************************************/

  const [playerList, setPlayerList] = useState<PlayerListProps[]>([]);

  const loadPlayerList = async () => {
    try {
      const res = await getPlayerList();

      if (res) {
        setPlayerList(res.data);
      }
    } catch (error: any) {}
  };

  useEffect(() => {
    loadPlayerList();
  }, []);

  return (
    <SubscriberPageLayout>
      <CardLayout>
        <h6>Team Details</h6>

        <p>{userDetails.user?.teamname}</p>
        <p>Member since: {userDetails.user?.date}</p>
      </CardLayout>
      <CardLayout title="Player List" showAddIcon={true}>
        {playerList &&
          playerList.map((player) => (
            <PlayerListCard player={player} key={player._id} loadPlayerList={loadPlayerList}/>
          ))}
      </CardLayout>
    </SubscriberPageLayout>
  );
};

export default Dashboard;
