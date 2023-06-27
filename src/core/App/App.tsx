import { useRecoilState } from "recoil";
import { useEffect, useMemo } from "react";

import { Home, ModalsProvider, Settings } from "core";
import { Root } from "components";

import type { FC } from "react";
import { Pages, Modals } from "store/types";

import { ACTIVE_MODAL, ACTIVE_PAGE } from "store";

export const App: FC = () => {
  // const [activePage, setActivePage] = useRecoilState(ACTIVE_PAGE);
  const [activeModal, setActiveModal] = useRecoilState(ACTIVE_MODAL);
  const activeNotify = "";

  const activePage = Pages.Settings;

  // useEffect(() => {
  //   const timeout = activePage === Pages.Home ? 2000 : 15000;
  //
  //   setTimeout(() => {
  //     setActivePage(activePage === Pages.Home ? Pages.Settings : Pages.Home);
  //   }, timeout);
  // }, [activePage]);

  // useEffect(() => {
  //   if (activeModal === undefined) {
  //     setTimeout(() => {
  //       setActiveModal(Modals.UserMoreInfo);
  //     }, 2000);
  //   }
  // }, [activeModal]);

  const modalsProvider = useMemo(
    () => <ModalsProvider activeModal={activeModal} onClose={() => setActiveModal(undefined)} />,
    [activeModal],
  );
  const notifyProvider = useMemo(() => <></>, [activeNotify]);

  return (
    <Root activePage={activePage} modalsProvider={modalsProvider} notifyProvider={notifyProvider}>
      <Home id={Pages.Home} />
      <Home id={Pages.Bank} />
      <Settings id={Pages.Settings} />
    </Root>
  );
};
