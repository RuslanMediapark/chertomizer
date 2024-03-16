import { FC } from "react";
import "./style.scss";
import { Adduser, UserCards } from "../../../feature";
import { UsersList } from "../../../feature/UsersList";

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <UsersList />
      <div className="main-wrapper">
        <UserCards />
        <Adduser />
      </div>
    </div>
  );
};
