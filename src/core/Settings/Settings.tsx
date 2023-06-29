import { Page, PageHeader } from "components";
import { List, ListItem, Switch } from "uikit";

import type { FC } from "react";
import type { Pages } from "store/types";
import {
  Icon24BrushOutline,
  Icon24ColorPickerOutline,
  Icon24DollarOutline,
  Icon24KeyOutline,
  Icon24LogoGoogle,
  Icon24LogoVkOutline,
  Icon24MailOutline,
  Icon24MessageOutline,
  Icon24Newsfeed,
} from "@vkontakte/icons";

export const Settings: FC<{ id: Pages }> = () => {
  return (
    <Page
      header={
        <PageHeader description="Настроить - легко" isBackButton>
          Настройки
        </PageHeader>
      }
    >
      <List title="Способы входа" marginIsBottom>
        <ListItem isOpening icon={<Icon24KeyOutline />} description={"Настроить"}>
          Логин и пароль
        </ListItem>
        <ListItem isOpening icon={<Icon24LogoGoogle />} description={"Настроить"}>
          Google Аккаунт
        </ListItem>
        <ListItem isOpening icon={<Icon24LogoVkOutline />} description={"Настроить"}>
          VK ID
        </ListItem>
        <ListItem isOpening icon={<Icon24MailOutline />} description={"Настроить"}>
          Почта
        </ListItem>
      </List>

      <List title="Приватность" marginIsBottom>
        <ListItem
          icon={<Icon24Newsfeed />}
          after={<Switch onChange={(value) => console.log(value)} />}
          description={"Не отображать в ленте"}
        >
          Видимость в ленте
        </ListItem>
        <ListItem
          icon={<Icon24MessageOutline />}
          after={<Switch onChange={(value) => console.log(value)} />}
          description={"Запретить писать сообщения"}
        >
          Сообщения от людей
        </ListItem>
        <ListItem
          icon={<Icon24DollarOutline />}
          after={<Switch onChange={(value) => console.log(value)} />}
          description={"Запретить переводы от людей"}
        >
          Банковские переводы
        </ListItem>
        <ListItem
          icon={<Icon24MessageOutline />}
          after={<Switch onChange={(value) => console.log(value)} />}
          description={"Имя заменяется на случайное"}
        >
          Скрыть имя
        </ListItem>
      </List>

      <List title="Дизайн">
        <ListItem
          icon={<Icon24BrushOutline />}
          after={<Switch onChange={(value) => console.log(value)} />}
          description={"Настрой под себя"}
        >
          Темная тема
        </ListItem>
        <ListItem isOpening icon={<Icon24ColorPickerOutline />} description={"Сделай в цвет"}>
          Акцентный цвет
        </ListItem>
      </List>
    </Page>
  );
};
