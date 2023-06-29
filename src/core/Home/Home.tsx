import "./Home.scss";

import { Page, PageHeader } from "components";
import { Avatar, Text, TextMode } from "uikit";

import type { FC } from "react";
import type { Pages } from "store/types";

export const Home: FC<{ id: Pages }> = (props) => {
  return (
    <Page header={<PageHeader description="Отличного дня!">Главная страница</PageHeader>}>
      <div className="Home__profile">
        <Avatar
          url="https://img.hhcdn.ru/photo/699935046.jpeg?t=1688148762&h=5zCr76cG_km9zsGZR_mPNQ"
          size={56}
        />
        <div>
          <Text mode={TextMode.Title}>Dmitry Maximyuk</Text>
          <Text mode={TextMode.Description}>@id123456</Text>
        </div>
      </div>
    </Page>
  );
};
