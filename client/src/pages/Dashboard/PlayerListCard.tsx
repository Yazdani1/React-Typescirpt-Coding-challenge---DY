import React,{FC} from 'react'

import style from "./PlayerListCard.module.scss";
import {PlayerListProps} from "../../services/DataProvider";

interface PlayerListCardProps {
    player: PlayerListProps
}

const PlayerListCard:FC<PlayerListCardProps> = ({player}) => {
  return (
    <div className={style.playerCardContainer}>
        <h5>Name:{player.name}</h5>
        <h5>Jersey:{player.jerseyNumber.toString()}</h5>
    </div>
  )
}

export default PlayerListCard