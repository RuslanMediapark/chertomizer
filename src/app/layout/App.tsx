import { FC } from "react";
import { MainLayout } from "./MainLayout";
import {
  RecoilRoot,
} from "recoil";

export const App: FC = () => {
  
  return (
    <RecoilRoot>
      <MainLayout style={{ background: 'radial-gradient(#311218, #000c14)' }} />
    </RecoilRoot>
  );
};
