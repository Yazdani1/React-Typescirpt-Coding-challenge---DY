import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

import style from "./Dashboard.module.scss";
import SubscriberPageLayout from "../../layouts/SubscriberPageLayout";
import {
  getPlayerList,
  CreatePlayerListProps,
  ceatePlayerList,
} from "../../services/API";
import { PlayerListProps } from "../../services/DataProvider";
import CardLayout from "../../components/CardLayout/CardLayout";
import { UserContext } from "../../contextapi/UserContext";
import PlayerListCard from "./PlayerListCard";
import ModalBox from "../../components/Modal/ModalBox";

const Dashboard = () => {
  //Context API to show user info

  const [userDetails] = useContext(UserContext);

  /****************************************/
  /****** Create Player List     **********/
  /****************************************/

  const [palyerName, setPlayerName] = useState<string>("");
  const [playerJerseyNumber, setPlayerJerseyNumber] = useState<string>("");

  const onSubmitCreatePlayerList = async () => {
    try {
      const payload: CreatePlayerListProps = {
        name: palyerName,
        jerseyNumber: parseInt(playerJerseyNumber),
      };

      const res = await ceatePlayerList(payload);

      if (res) {
        toast.success("Player Created Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        loadPlayerList();
        resetInputFields();
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const resetInputFields = () => {
    setPlayerName("");
    setPlayerJerseyNumber("");
  };

  /****************************************/
  /******  To Open Modal Box     **********/
  /****************************************/

  const [open, setOpen] = useState<boolean>(false);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

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
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    loadPlayerList();
  }, []);

  return (
    <SubscriberPageLayout>
      <CardLayout>
        <h6>Team Details</h6>

        <div className={style.teamInfo}>
          <h2>{userDetails.user?.teamname}</h2>

          <h6>
            Member since: {moment(userDetails.user?.date).format("MMM Do YY")}{" "}
          </h6>
        </div>
      </CardLayout>
      <CardLayout
        title="Player List: "
        showAddIcon={true}
        playerCount={playerList.length}
        openModal={onOpenModal}
      >
        {playerList &&
          playerList.map((player) => (
            <PlayerListCard
              player={player}
              key={player._id}
              loadPlayerList={loadPlayerList}
            />
          ))}
      </CardLayout>

      <ModalBox
        open={open}
        onCloseModal={onCloseModal}
        title="Create Player List"
        onResetButton={resetInputFields}
        onSaveButton={onSubmitCreatePlayerList}
      >
        {/* Radio button to choose expense book color*/}

        <div className="form-group">
          <input
            type="text"
            name="Name"
            className={style.createPlayerInput}
            placeholder="Player name"
            value={palyerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="Name"
            className={style.createPlayerInput}
            placeholder="Player Jersey Number"
            value={playerJerseyNumber}
            onChange={(e) => setPlayerJerseyNumber(e.target.value)}
          />
        </div>
      </ModalBox>
    </SubscriberPageLayout>
  );
};

export default Dashboard;
