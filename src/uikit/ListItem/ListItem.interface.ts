import type { ReactNode } from "react";

export interface ListItemProps {
  icon?: ReactNode;
  after?: ReactNode;
  children: string;
  description?: string;
  isOpening?: boolean;
}
