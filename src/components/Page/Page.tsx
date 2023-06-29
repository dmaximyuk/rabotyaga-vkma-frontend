import "./Page.scss";

import type { FC } from "react";
import type { PageProps } from "./Page.interface";

export const Page: FC<PageProps> = (props) => {
  return (
    <>
      {props.header}
      <div className="Page__container">{props.children}</div>
    </>
  );
};
