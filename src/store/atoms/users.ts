import { atom } from "recoil";

export type UsersType = {
  name: string;
  id: string;
  new: boolean;
};

export const usersState = atom<UsersType[]>({
    key: 'users',
    default: [], 
  });

  export const chertUserState = atom<number | null>({
    key: 'chertUsers',
    default: null, 
  });

  export const chertUserImageState = atom<number | null>({
    key: 'chertUserImage',
    default: null, 
  });