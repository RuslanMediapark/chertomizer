import { atom } from "recoil";
import Devil1 from "../../assets/1.webp";
import Devil2 from "../../assets/2.webp";
import Devil3 from "../../assets/3.webp";
import Devil4 from "../../assets/4.webp";
import Devil5 from "../../assets/5.webp";
import Devil6 from "../../assets/6.webp";
import Devil7 from "../../assets/7.webp";
import Devil8 from "../../assets/8.webp";
import Devil9 from "../../assets/9.webp";
import Devil13 from "../../assets/13.webp";
import Devil14 from "../../assets/14.webp";

export const imagesState = atom({
    key: 'images',
    default: [
        Devil1,
        Devil2,
        Devil3,
        Devil4,
        Devil5,
        Devil6,
        Devil7,
        Devil8,
        Devil9,
        Devil13,
        Devil14
    ], 
  });