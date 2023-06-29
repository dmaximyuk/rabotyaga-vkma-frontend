import type { HTMLAttributes } from "react";

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  title?: string;
  delay?: "slow" | "medium" | "fast";
  marginIsBottom?: boolean;
}
