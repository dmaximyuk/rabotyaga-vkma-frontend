import "./Text.scss";

import { createElement, useMemo } from "react";
import cn from "classnames";

import type { FC, ReactHTML } from "react";
import type { TextProps } from "./Text.interface";
import { TextMode, TextSize } from "./Text.interface";

const Text: FC<TextProps> = (props) => {
  const element = useMemo((): keyof ReactHTML => {
    switch (props.mode) {
      case TextMode.Title:
        return "h2";
      case TextMode.Paragraph:
        return "p";
      case TextMode.Description:
        return "span";
      default:
        return "p";
    }
  }, [props.mode]);

  return createElement(
    element,
    {
      className: cn("Text", [`Text__${props.mode}`], [`Text__size_mode-${props?.size || "l"}`]),
    },
    props.children,
  );
};

export { Text, TextSize, TextMode };
