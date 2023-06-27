import { Children, useMemo } from "react";
import { motion } from "framer-motion";

import type { HTMLAttributes, FC, ReactElement } from "react";

export const List: FC<HTMLAttributes<HTMLUListElement> & { delay?: "slow" | "medium" | "fast" }> = (
  props,
) => {
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
    <motion.div>
      {children.map((item, index) => (
        <motion.div
          initial={props?.delay && { opacity: 0, translateY: 50 }}
          animate={props?.delay && { opacity: 1, translateY: 0 }}
          transition={
            props?.delay ? { delay: delay * index, stiffness: 200, damping: 9, type: "spring" } : {}
          }
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
