import { FC, useEffect, useRef } from "react";
import NewPlayer from "@/assets/new.webp";
import NormalUser from "@/assets/user.webp";

import "./style.scss";
import { getRandomElementsFromArray } from "../../utils";
import { CrossIcon } from "../../shared/SVG/Cross";

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
  removeUser: () => void;
}

export const UserCard: FC<StripProps> = ({
  images,
  name,
  isNew,
  style,
  rolling,
  selectedUser,
  selectedImage,
  colIndex,
  setRolling,
  removeUser,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const maxScroll =
      containerRef.current.scrollHeight - containerRef.current.clientHeight;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const position = progress * 2;
      if (containerRef.current) {
        containerRef.current.scrollTop = position % maxScroll;
      }

      if (progress < 2000) {
        window.requestAnimationFrame(animate);
        setRolling(false);
      }
    };

    window.requestAnimationFrame(animate);
  }, [rolling === true]);

  const getImage = () => {
    if (isNew) {
      return <img src={NewPlayer} alt={`Slot Machine Image`} />;
    } else if (selectedImage && colIndex === selectedUser) {
      return <img src={images[selectedImage]} alt={`Slot Machine Image`} />;
    } else if (selectedImage && colIndex !== selectedUser) {
      return <img src={NormalUser} alt={`Slot Machine Image`} />;
    }
  };

  const hadleClick = () => {
    if(colIndex !== selectedUser) return
     wrapperRef?.current?.classList.remove('active');
  };
  const randomImages: string[] = getRandomElementsFromArray(images, 6);
  return (
    <div
      ref={wrapperRef}
      onClick={hadleClick}
      className={`user-card-wrapper ${colIndex === selectedUser && "isChert active"}`}
    >
      {selectedUser === null && (
        <button className="cross" onClick={removeUser}>
          <CrossIcon />
        </button>
      )}
      <div className="image-container" ref={containerRef} style={style}>
        {getImage()}
        {randomImages.map((src, index) => (
          <img
            style={{
              display:
                isNew ||
                (selectedImage && colIndex === selectedUser) ||
                (selectedImage && colIndex !== selectedUser)
                  ? "none"
                  : "block",
            }}
            key={index}
            src={src}
            alt={`Slot Machine Image ${index + 1}`}
          />
        ))}
      </div>
      <p>{name && name}</p>
    </div>
  );
};
