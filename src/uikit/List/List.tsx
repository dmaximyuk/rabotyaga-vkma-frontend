import { Children } from "react";
import { motion } from "framer-motion";

import type { HTMLAttributes, FC, ReactElement } from "react";

export const List: FC<HTMLAttributes<HTMLUListElement> & { isDynamics?: boolean }> = (props) => {
  const children = Children.toArray(props.children) as ReactElement[];

  return (
    <motion.div>
      {children.map((item, index) => (
        <motion.div
          initial={props?.isDynamics && { opacity: 0, translateY: 50 }}
          animate={props?.isDynamics && { opacity: 1, translateY: 0 }}
          transition={
            props?.isDynamics
              ? { delay: 0.04 * index, stiffness: 200, damping: 9, type: "spring" }
              : {}
          }
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};
