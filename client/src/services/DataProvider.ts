interface IBase {
  _id: string;
  date: string;
}

/****************************************/
/*********       User             ******/
/****************************************/

export interface UserProfileDetailsProps extends IBase {
  teamname: string;
  role: string;
  email: string;
}

/****************************************/
/********* Player List            ******/
/****************************************/

export interface PlayerListProps extends IBase {
  name: string;
  jerseyNumber: Number;
  postedBy: UserProfileDetailsProps;
}
