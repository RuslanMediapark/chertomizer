import { FC, useEffect, useRef, useState } from "react";
import NewPlayer from '@/assets/new.webp';
import NormalUser from '@/assets/user.webp';

import './style.scss';


interface StripProps {
  images: string[];
  name: string;
  isNew: boolean;
  rolling: boolean;
  colIndex: number;
  selectedUser: number | null;
  selectedImage: number | null;
  style: any;
  setRolling: (value: boolean) => void;
}


export const UserCard: FC<StripProps> = ({
  images,
  name,
  isNew,
  style,
  rolling,
  setRolling,
  selectedUser,
  selectedImage,
  colIndex,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return; // Прекращаем анимацию, если выбрано изображение

    const maxScroll = containerRef.current.scrollHeight - containerRef.current.clientHeight;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const position = progress * 2; // Ускорение прокрутки

      if (containerRef.current) {
        containerRef.current.scrollTop = position % maxScroll;
      }

      if (progress < 2000) { // Длительность анимации
        window.requestAnimationFrame(animate);
        setRolling(false)
      }
    };

    window.requestAnimationFrame(animate);
  }, [rolling === true]);

  const getImage = () => {
    if(isNew) {
      return <img src={NewPlayer} alt={`Slot Machine Image`} />
    } else if(selectedImage && colIndex === selectedUser) {
      return <img src={images[selectedImage]} alt={`Slot Machine Image`} />
    } else if(selectedImage && colIndex !== selectedUser) {
      return <img src={NormalUser} alt={`Slot Machine Image`} />
    } else {
      return images.map((src, index) => {
        return (
          <img key={index} src={src} alt={`Slot Machine Image ${index + 1}`} />
        )
      })
    }
  };
  return (
    <div className={`user-card-wrapper ${colIndex === selectedUser && 'active'}`}>
      <div className="image-container" ref={containerRef} style={style}>
        {getImage()}
      </div>
      <p>{name && name}</p>
    </div>
    
  );
};
