import type { Modals } from "store/types";

export interface ModalsProps {
  activeModal?: Modals;
  onClose: Function;
}
