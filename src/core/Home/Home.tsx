import { PageHeader } from "components";

import type { FC } from "react";
import type { Pages } from "store/types";

export const Home: FC<{ id: Pages }> = (props) => {
  return (
    <>
      <PageHeader description="Hello" isBackButton>
        Home
      </PageHeader>
    </>
  );
};
