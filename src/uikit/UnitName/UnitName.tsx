import "./UnitName.scss";

import type { FC } from "react";

import { Text, TextMode } from "uikit";
import type { UnitNameProps } from "./UnitName.interface";

export const UnitName: FC<UnitNameProps> = (props) => {
  // const [name, setName] = useState<string>();

  // useEffect(() => {
  //   fetch("/users" + new URLSearchParams({ userId: props.userId.toString() }))
  //     .then((res) => res.json())
  //     .then((data) => data.lastName + data.firstName)
  //     .catch((_err) => {});
  // }, [props.userId]);
  // const name = useMemo(() => {
  //   if (props.userName) {
  //     return props.userName;
  //   } else {
  //     fetch("" + new URLSearchParams({ userId: props.userId.toString() }));
  //   }
  // }, [props.userId, props.userName]);

  return <Text mode={props.mode || TextMode.Title}>Dmitry Maximyuk</Text>;
};
