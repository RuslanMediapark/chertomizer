import { atom } from "recoil";
import DevilOne from "../../assets/1.webp";
import DevilTwo from "../../assets/2.webp";
import DevilThree from "../../assets/3.webp";
import DevilFour from "../../assets/4.webp";
import DevilFive from "../../assets/5.webp";
import DevilSix from "../../assets/6.webp";
import DevilSeven from "../../assets/7.webp";

export const imagesState = atom({
    key: 'images',
    default: [
        DevilOne,
        DevilTwo,
        DevilThree,
        DevilFour,
        DevilFive,
        DevilSix,
        DevilSeven,
    ], 
  });