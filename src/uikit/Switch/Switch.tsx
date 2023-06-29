import "./Switch.scss";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";

import type { FC } from "react";

import type { SwitchProps } from "./Switch.interface";

export const Switch: FC<SwitchProps> = (props) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  const toggleSwitch = useCallback(() => {
    props?.onChange && props?.onChange(!isOn);
    setIsOn(!isOn);
  }, [isOn, setIsOn]);

  return (
    <div className="Switch" data-on={isOn} onClick={toggleSwitch}>
      <motion.div className="Switch__handle" layout transition={spring} />
    </div>
  );
};
