import axios from "axios";
import { API_URL, headerConfig } from "../services/config";

/****************************************/
/*********     User         *************/
/****************************************/

export interface UserRegistrationProps {
  teamname: string;
  email: string;
  password: string;
}

export const userRegistration = async (props: UserRegistrationProps) => {
  const res = await axios.post(API_URL + "/registration", { ...props });
  return res;
};

export interface UserLoginProps {
  email: string;
  password: string;
}

export const userLogin = async (props: UserLoginProps) => {
  const res = await axios.post(API_URL + "/login", { ...props });
  return res;
};

/****************************************/
/*********User Role For Admin Site ******/
/****************************************/

export const getUserRoleForAdmin = async () => {
  const res = await axios.get(API_URL + "/current-user-role", headerConfig());
  return res;
};

/****************************************/
/* All User List Only Admin Can access **/
/****************************************/

export const getAllUserList = async () => {
  const res = await axios.get(API_URL + "/alluser", headerConfig());
  return res;
};

/****************************************/
/*********  Player List     *************/
/****************************************/

export interface CreatePlayerListProps {
  name: string;
  jerseyNumber: number;
}

export const ceatePlayerList = async (props: CreatePlayerListProps) => {
  const res = await axios.post(
    API_URL + "/create-playerlist",
    { ...props },
    headerConfig()
  );
  return res;
};

export const getPlayerList = async () => {
  const res = await axios.get(API_URL + "/get-player-list", headerConfig());
  return res;
};

export const deletePlayerList = async (id: string) => {
  const res = await axios.delete(
    API_URL + "/delete-player/" + id,
    headerConfig()
  );
  return res;
};
