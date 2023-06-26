import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { Pages } from "store/types";

export interface RootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode[];
  modalsProvider: ReactNode;
  notifyProvider: ReactNode;
  activePage: Pages;
}
