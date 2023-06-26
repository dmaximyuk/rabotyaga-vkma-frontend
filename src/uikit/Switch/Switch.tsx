import "./Switch.scss";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";

import type { FC } from "react";

export const Switch: FC = (props) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  const toggleSwitch = useCallback(() => setIsOn(!isOn), [isOn, setIsOn]);

  return (
    <div className="Switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="Switch__handle" layout transition={spring} />
    </div>
  );
};
