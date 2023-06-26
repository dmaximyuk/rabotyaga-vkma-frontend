import { atom } from "recoil";
import { Pages, Modals } from "../types";

export const ACTIVE_PAGE = atom<Pages>({ key: "active_page", default: Pages.Home });
export const ACTIVE_MODAL = atom<Modals | undefined>({ key: "active_modal", default: undefined });
