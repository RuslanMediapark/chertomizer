import { FC } from "react";
import { useRecoilState } from "recoil";
import { UsersType, usersState } from "../../store";
import RemoveIcon from '@shared/icons/red-can.svg'
import "./styles.scss";

export const UsersList: FC = () => {
  const [usersList, updateUser] = useRecoilState<UsersType[]>(usersState);

  const removeUser = (id: string) => {
    const formatusers = usersList.filter((i) => i.id !== id);
    updateUser(formatusers);
  };
  return (
    <div className="user-list-wrapper">
      <h3 className="list-title">List of cherts</h3>
      <div className="user-list">
        {usersList.map((i, index) => (
          <div key={index} className="user-item">
            <div className="user-item-wrapper">
              <p>{i.name}</p>{" "}
              <button onClick={() => removeUser(i.id)}><img src={RemoveIcon} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
