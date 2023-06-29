import "./UnitName.scss";

import cn from "classnames";

import type { FC } from "react";
import type { AvatarProps } from "./UnitName.interface";

export const UnitName: FC<AvatarProps> = (props) => (
  <img
    className={cn("Avatar", props.className ? props.className : "")}
    width={props.size}
    height={props.size}
    src={props.url}
    alt=""
  />
);
