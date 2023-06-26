import "./Modals.scss";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { FC } from "react";
import type { ModalsProps } from "./Modals.interface";
import { Modals } from "store/types";

const ModalWrapper: FC<ModalsProps> = (props) => {
  const modals = {
    [`${Modals.UserMoreInfo}`]: <div>UserMoreInfo</div>,
  };
  const isModalEntityExists = modals.hasOwnProperty(`${props.activeModal}`);

  return (
    <AnimatePresence>
      {isModalEntityExists && (
        <motion.div
          className="ModalWrapper__backdrop"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(3px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          onClick={() => props.onClose()}
        >
          <motion.div
            className="ModalWrapper__container"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            initial={{ height: 0 }}
            animate={{ height: "calc(80vh)" }}
            exit={{ height: 0 }}
            transition={{
              stiffness: 80,
              damping: 12,
              type: "spring",
            }}
          >
            <div className="ModalWrapper__container__inherit">{modals[`${props.activeModal}`]}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalsProvider = memo(ModalWrapper);
