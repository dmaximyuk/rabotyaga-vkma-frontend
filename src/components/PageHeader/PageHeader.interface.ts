import type { ReactNode } from "react";

export interface PageHeaderProps {
  isBackButton?: boolean;
  description?: string;
  children: string;
  after?: ReactNode;
}
