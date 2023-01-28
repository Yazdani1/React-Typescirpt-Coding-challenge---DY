import React, { FC, ReactNode } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import cardStyle from "./CardLayout.module.scss";

interface CardLayoutProps {
  title?: string;
  children?: ReactNode;
  openModal?: () => void;
  showAddIcon?: boolean;
  playerCount?: number;
}

const CardLayout: FC<CardLayoutProps> = ({
  children,
  title,
  openModal,
  showAddIcon,
  playerCount
}) => {
  return (

    <div className={cardStyle.cardContainer}>
      <div className={cardStyle.cardLayoutHeader}>
        <h5>{title}</h5>
        <h5 style={{marginLeft:"7px"}}>{playerCount}</h5>

        {showAddIcon && (
          <p onClick={openModal}>
            <IoAddCircleSharp size={25} />
          </p>
        )}
      </div>

      {children}

    </div>
    
  );
};

export default CardLayout;
