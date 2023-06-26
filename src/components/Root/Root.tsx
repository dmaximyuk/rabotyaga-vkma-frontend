import { ReactElement } from "react";
import { motion } from "framer-motion";

import type { FC } from "react";
import type { RootProps } from "./Root.interface";

export const Root: FC<RootProps> = (props) => {
  return (
    <>
      {props.modalsProvider}
      {props.notifyProvider}
      {props.children.map(
        (item) =>
          (item as ReactElement).props.id === props.activePage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {item}
            </motion.div>
          ),
      )}
    </>
  );
};
