import { FC } from "react";
import "./style.scss";
import { Adduser, UserCards } from "../../../feature";
import { UsersList } from "../../../feature/UsersList";

type Props = {
  style: any;
}
export const MainLayout: FC<Props> = ({
  style
}) => {
  return (
    <div className="main-layout" style={style}>
      <UsersList />
      <div className="main-wrapper">
        <UserCards />
        <Adduser />
      </div>
    </div>
  );
};
