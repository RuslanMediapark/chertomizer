import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";


export const CrossIcon: FC<
  HTMLAttributes<SVGElement | HTMLElement> & {
    width?: number;
    height?: number;
    viewBox?: string;
  }
> = ({ width = 20, height = 20, className, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames("stroke-current fill-transparent", className)}
    {...props}
  >
    <path
      d="M14.1251 5.87549L10.0003 10.0003M10.0003 10.0003L5.87553 14.1251M10.0003 10.0003L5.87553 5.87549M10.0003 10.0003L14.1251 14.1251"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
