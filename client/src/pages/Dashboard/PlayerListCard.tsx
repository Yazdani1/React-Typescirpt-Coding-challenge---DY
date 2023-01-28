import React, { FC } from "react";
import { ToastContainer, toast } from "react-toastify";

import style from "./PlayerListCard.module.scss";
import { PlayerListProps } from "../../services/DataProvider";
import { deletePlayerList } from "../../services/API";

interface PlayerListCardProps {
  player: PlayerListProps;
  loadPlayerList: ()=> void;
}

const PlayerListCard: FC<PlayerListCardProps> = ({ player,loadPlayerList }) => {


  const deletePlayer = async () => {
    try {

      const res = await deletePlayerList(player._id);

      if (res) {
        toast.success("Player deleted Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        loadPlayerList()
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

  };

  return (
    <div className={style.playerCardContainer}>
      <h5>Name:{player.name}</h5>
      <h5>Jersey:{player.jerseyNumber.toString()}</h5>
      <button className="btn btn-danger" onClick={()=>deletePlayer()}>Delete</button>
    </div>
  );
};

export default PlayerListCard;
