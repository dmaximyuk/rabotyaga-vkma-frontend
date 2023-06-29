import "./List.scss";

import { Children, useMemo } from "react";
import { motion } from "framer-motion";
import { Text } from "uikit";

import type { FC, ReactElement } from "react";
import { TextMode } from "uikit";
import type { ListProps } from "./List.interface";
import cn from "classnames";

export const List: FC<ListProps> = (props) => {
  const children = Children.toArray(props.children) as ReactElement[];
  const delay = useMemo(() => {
    switch (props.delay) {
      case "fast":
        return 0.04;
      case "medium":
        return 0.09;
      case "slow":
        return 0.14;
      default:
        return 0;
    }
  }, [props.delay]);

  return (
    <>
      {props.title && (
        <Text className="List__title" mode={TextMode.Title}>
          {props.title}
        </Text>
      )}
      <motion.div
        className={cn("List", {
          List_marginIsBottom: props.marginIsBottom,
        })}
      >
        {children.map((item, index) => (
          <motion.div
            key={index}
            initial={props?.delay && { opacity: 0, translateY: 50 }}
            animate={props?.delay && { opacity: 1, translateY: 0 }}
            transition={
              props?.delay
                ? { delay: delay * index, stiffness: 200, damping: 9, type: "spring" }
                : {}
            }
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
