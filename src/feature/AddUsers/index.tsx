import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { UsersType, usersState } from "../../store";
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

type Inputs = {
  name: string
}

export const Adduser: FC = () => {
  const [users, addUser] = useRecoilState<UsersType[]>(usersState);
  const { 
    handleSubmit,
    register,
    reset
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name } = data;
    if (!name.length) return;
    if (users.length === 12) {
      reset();
      return;
    }
    addUser((oldValues: UsersType[]) => [...oldValues, { name, id: uuidv4(), new: true }]);
    reset();
  }
  return (
    <div className="add-user">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("name")} placeholder="Type name of chert"/>
      <button type="submit">Add to list this chert</button>
      </form>
    </div>

  );
};
