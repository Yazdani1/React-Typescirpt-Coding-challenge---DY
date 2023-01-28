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
