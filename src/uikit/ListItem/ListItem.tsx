import "./ListItem.scss";

import cn from "classnames";

import { Text, TextMode } from "uikit";

import { Icon16Chevron } from "@vkontakte/icons";

import type { ListItemProps } from "./ListItem.interface";
import type { FC } from "react";

export const ListItem: FC<ListItemProps> = (props) => {
  return (
    <div className="ListItem">
      {props.icon && <div className="ListItem__before">{props.icon}</div>}
      <div className="ListItem__container">
        <Text mode={TextMode.Title}>{props.children}</Text>
        {props.description && <Text mode={TextMode.Description}>{props.description}</Text>}
      </div>
      {(props.isOpening || !!props.after) && (
        <div
          className={cn("ListItem__after", {
            ListItem__after_isOpening: props.isOpening,
          })}
        >
          {props.isOpening ? <Icon16Chevron /> : props.after}
        </div>
      )}
    </div>
  );
};
