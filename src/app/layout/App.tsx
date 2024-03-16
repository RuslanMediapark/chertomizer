import { FC } from "react";
import { MainLayout } from "./MainLayout";
import {
  RecoilRoot,
} from "recoil";

export const App: FC = () => {
  return (
    <RecoilRoot>
      <MainLayout />
    </RecoilRoot>
  );
};
