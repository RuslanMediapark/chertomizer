import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { UsersType, chertUserState, usersState } from "../../store";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

type Inputs = {
  name: string;
};
const formText = {
  placeholder: 'Впиши имя/ник друга',
  button: 'Добавить'
};
export const Adduser: FC = () => {
  const [users, addUser] = useRecoilState<UsersType[]>(usersState);
  const selectedUser = useRecoilValue<number | null>(
    chertUserState
  );
  const { handleSubmit, register, reset } = useForm({
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
    addUser((oldValues: UsersType[]) => [
      ...oldValues,
      { name, id: uuidv4(), new: true },
    ]);
    reset();
  };
  return (
    <div className="add-user">
      {selectedUser === null && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue="test"
            {...register("name")}
            placeholder={formText.placeholder}
          />
          <button type="submit">{formText.button}</button>
        </form>
      )}
    </div>
  );
};
