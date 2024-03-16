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