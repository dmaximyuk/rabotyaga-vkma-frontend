import { PageHeader } from "components";
import { Select, Switch } from "uikit";

import type { FC } from "react";
import type { Pages } from "store/types";

export const Settings: FC<{ id: Pages }> = (props) => {
  return (
    <>
      <PageHeader description="Customize yours" isBackButton>
        Settings
      </PageHeader>

      <Switch />

      <Select />
    </>
  );
};
