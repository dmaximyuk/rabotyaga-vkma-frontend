import "./PageHeader.scss";

import type { FC } from "react";
import { useEffect } from "react";
import { usePlatform } from "hooks";

import cn from "classnames";

import { Text, TextMode, TextSize } from "uikit";
import type { PageHeaderProps } from "./PageHeader.interface";
import { Platform } from "store/types";

import { Icon28ChevronBack } from "@vkontakte/icons";

export const PageHeader: FC<PageHeaderProps> = (props) => {
  const platform = usePlatform();
  const platformClassNames = {
    [Platform.iOS]: "PageHeader--ios",
    [Platform.Android]: "PageHeader--android",
  };

  useEffect(() => {
    console.log(platform);
  }, [platform]);

  return (
    <>
      <div
        className={cn(
          "PageHeader",
          platformClassNames.hasOwnProperty(platform)
            ? platformClassNames[platform]
            : platformClassNames[Platform.Android],
        )}
      >
        {props.isBackButton && (
          <div className="PageHeader__before">
            <Icon28ChevronBack />
          </div>
        )}
        <div className="PageHeader__in">
          <Text mode={TextMode.Title}>{props.children}</Text>
          {!!props.description && <Text mode={TextMode.Description}>{props.description}</Text>}
        </div>
        {!!props.after && <div className={"PageHeader__after"}>{props.after}</div>}
      </div>
      <div className="PageHeader--safe-area" />
    </>
  );
};
