import { FC, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { UsersType, imagesState, usersState } from "../../store";
import Logo from '@/assets/logo.webp';
import { UserCard } from "..";
import "./styles.scss";

type Props = {};

export const UserCards: FC<Props> = () => {
  const [usersList, setUsersList] = useRecoilState<UsersType[]>(usersState);
  const [rolling, setRolling] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = useRecoilValue(imagesState);

  console.log(selectedUser)
  const shuffleImages = () => {
    setUsersList((users) => users.map((i) => ({ ...i, new: false })));
    setRolling(true);
    setSelectedImage(null);
    setSelectedUser(null);
    setTimeout(() => {
      const randomImage = Math.floor(Math.random() * images.length);
      const randomUser = Math.floor(Math.random() * usersList.length);
      setSelectedImage(randomImage);
      setSelectedUser(randomUser);
    }, 2000);
  };

  const handleReset = () => {
    setSelectedUser(null);
    setUsersList((users) => users.map((i) => ({ ...i, new: true })));
  }
    

  const resetUsers = () => {
    setUsersList([]);
    setSelectedImage(null);
    setSelectedUser(null);
  }

  return (
    <div className="users-cards-wrapper">
      {Boolean(usersList.length) ?
      <div className="users-card-wrapper">
        {usersList.map((i, index) => (
          <UserCard
            key={index}
            name={i.name}
            isNew={i.new}
            images={images}
            style={{
              width: usersList.length > 8 ? '150px' : '200px',
              height: usersList.length > 8 ? '150px' : '200px'
            }}
            colIndex={index}
            rolling={rolling}
            setRolling={setRolling}
            selectedUser={selectedUser}
            selectedImage={selectedImage}
          />
        ))}
      </div> : <img className="logo-image" src={Logo} />}
      {Boolean(usersList.length) && (
        <div className={`actions ${selectedUser !== null && 'find-user'}`}>
          <button onClick={shuffleImages}>Chertanut'</button>
          <button onClick={() => handleReset()}>Spin</button>
          <button onClick={() => resetUsers()}>Reset</button>
        </div>
      )}
    </div>
  );
};
