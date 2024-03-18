import { atom } from "recoil";
import Devil1 from "../../assets/1.webp";
import Devil2 from "../../assets/2.webp";
import Devil3 from "../../assets/3.webp";
import Devil4 from "../../assets/4.webp";
import Devil5 from "../../assets/5.webp";
import Devil6 from "../../assets/6.webp";
import Devil7 from "../../assets/7.webp";
// import Devil8 from "../../assets/8.webp";
// import Devil9 from "../../assets/9.webp";
import Devil10 from "../../assets/10.webp";
import Devil11 from "../../assets/11.webp";
import Devil13 from "../../assets/13.webp";
import Devil14 from "../../assets/14.webp";
import Devil15 from "../../assets/15.webp";
import Devil16 from "../../assets/15.webp";
import Devil17 from "../../assets/15.webp";
import Devil18 from "../../assets/18.webp";
import Devil19 from "../../assets/19.webp";

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
        Devil10,
        Devil11,
        Devil13,
        Devil14,
        Devil15,
        Devil16,
        Devil17,
        Devil18,
        Devil19
    ], 
  });