import { FC, useEffect, useState } from "react";
import { MainLayout } from "./MainLayout";
import {
  RecoilRoot,
} from "recoil";

export const App: FC = () => {
  const [background, setBackground] = useState('radial-gradient(#311218, #000c14)');

  useEffect(() => {
    const updateBackground = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      setBackground(`radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #311218, #000c14)`);
    };

    document.addEventListener('mousemove', updateBackground);

    return () => {
      document.removeEventListener('mousemove', updateBackground);
    };
  }, []);
  
  return (
    <RecoilRoot>
      <MainLayout style={{ background: background }} />
    </RecoilRoot>
  );
};
