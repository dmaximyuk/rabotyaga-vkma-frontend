import "./Modals.scss";

import { memo, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

import type { FC } from "react";
import type { PanInfo } from "framer-motion";
import type { ModalsProps } from "./Modals.interface";
import { Modals } from "store/types";

const ModalWrapper: FC<ModalsProps> = (props) => {
  const y = useMotionValue(0);
  const modals = {
    [`${Modals.UserMoreInfo}`]: (
      <>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
        <div>UserMoreInfo</div>
      </>
    ),
  };

  const isModalEntityExists = modals.hasOwnProperty(`${props.activeModal}`);

  const handleDragOnClose = useCallback(
    (_: unknown, { velocity, offset }: PanInfo) => {
      if (velocity.y > 150 && offset.y > 50) {
        props.onClose();
      }
    },
    [props.onClose],
  );

  useEffect(() => {
    y.set(0);
  }, []);

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
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              stiffness: 80,
              damping: 12,
              type: "spring",
            }}
            style={{ y: y }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragOnClose}
            onPointerDown={() => y.set(0)}
          >
            <div className="ModalWrapper__container__inherit">{modals[`${props.activeModal}`]}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalsProvider = memo(ModalWrapper);
