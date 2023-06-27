import { PageHeader } from "components";
import { List, ListItem, Switch } from "uikit";

import type { FC } from "react";
import type { Pages } from "store/types";

export const Settings: FC<{ id: Pages }> = () => {
  return (
    <>
      <PageHeader description="Customize yours" isBackButton>
        Settings
      </PageHeader>

      <Switch />

      <List delay="fast">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </>
  );
};
