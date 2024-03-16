import { FC, useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  UsersType,
  chertUserImageState,
  chertUserState,
  imagesState,
  usersState,
} from "../../store";
import Logo from "@/assets/logo.webp";
import copy from "copy-text-to-clipboard";
import { useParams, useNavigate } from "react-router-dom";
import { UserCard } from "..";

import "./styles.scss";

type Props = {};

const buttonsText = {
  telegram: 'В Телеграм',
  copy: 'Скоприровать ссылку',
  action: 'Чертануть',
  reset: 'Сбросить',
};
export const UserCards: FC<Props> = () => {
  const [usersList, setUsersList] = useRecoilState<UsersType[]>(usersState);
  const [selectedUser, setSelectedUser] = useRecoilState<number | null>(
    chertUserState
  );
  const [selectedImage, setSelectedImage] = useRecoilState<number | null>(
    chertUserImageState
  );
  const [rolling, setRolling] = useState<boolean>(false);

  const images = useRecoilValue(imagesState);
  const navigate = useNavigate();
  const params = useParams();
  
  useEffect(() => {
    if (params.id) {
      try {
        const decode = decodeURIComponent(escape(atob(params.id)));
        const result = JSON.parse(decode);

        setUsersList(result.usersList);
        setSelectedImage(result.selectedImage);
        setSelectedUser(result.selectedUser);
      } catch (error) {
        navigate("/");
      }
    }
  }, []);

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

      const result = {
        usersList: usersList.map((i) => ({ ...i, new: false })),
        selectedUser: randomUser,
        selectedImage: randomImage,
      };
      const toJSON = JSON.stringify(result);
      const encodedData = btoa(unescape(encodeURIComponent(toJSON)));

      navigate(`/${encodedData}`);
    }, 2000);
  };

  const resetUsers = () => {
    setUsersList([]);
    setSelectedImage(null);
    setSelectedUser(null);
    navigate("/");
  };

  const removeUser = (id: string) => {
    const formatusers = usersList.filter((i) => i.id !== id);
    setUsersList(formatusers);
  };

  const copyLink = () => {
    copy(window.location.href);
  };
  return (
    <div className="users-cards-wrapper">
      {Boolean(usersList.length) ? (
        <div className="users-card-wrapper">
          {usersList.map((i, index) => (
            <UserCard
              key={index}
              name={i.name}
              isNew={i.new}
              images={images}
              style={{
                width: usersList.length > 8 ? "150px" : "200px",
                height: usersList.length > 8 ? "150px" : "200px",
              }}
              colIndex={index}
              rolling={rolling}
              removeUser={() => removeUser(usersList[index].id)}
              setRolling={setRolling}
              selectedUser={selectedUser}
              selectedImage={selectedImage}
            />
          ))}
        </div>
      ) : (
        <img className="logo-image" src={Logo} />
      )}
      {Boolean(usersList.length) && (
        <div className={`actions ${selectedUser !== null && "find-user"}`}>
          {!Boolean(selectedUser) && (
            <button onClick={shuffleImages}>{buttonsText.action}</button>
          )}
          {Boolean(selectedUser) && (
            <>
              <button onClick={copyLink}>{buttonsText.copy}</button>
              <button>
                <a
                  target="_blank"
                  href={`https://telegram.me/share/url?url=${encodeURIComponent(
                    "http://localhost:5173/eyJ1c2Vyc0xpc3QiOlt7Im5hbWUiOiJkYWR3YSIsImlkIjoiN2E2ZmFlMzctNThhYy00NDM5LWE4N2EtYTNlMzcyNzc5NGNkIiwibmV3IjpmYWxzZX0seyJuYW1lIjoiZGF3ZHdhIiwiaWQiOiJiODFmODc0Mi04ZGQ0LTQ0MzktOTIzMi0xZDQwNDMwNjU0ZjgiLCJuZXciOmZhbHNlfSx7Im5hbWUiOiJkd2FkYXciLCJpZCI6IjgyM2JkOWI4LTEyZjktNGI2YS04MmU2LTg5OTY0MmFhYTM0MyIsIm5ldyI6ZmFsc2V9XSwic2VsZWN0ZWRVc2VyIjoyLCJzZWxlY3RlZEltYWdlIjoxMH0="
                  )}`}
                  style={{
                    color: '#fff'
                  }}
                >
                  {buttonsText.telegram}
                </a>
              </button>
            </>
          )}
          {(!usersList.length || Boolean(selectedUser)) && (
            <button onClick={() => resetUsers()}>{buttonsText.reset}</button>
          )}
        </div>
      )}
    </div>
  );
};
