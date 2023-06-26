import { Platform } from "store/types";

export const usePlatform = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (/ipad|iphone|ipod/.test(userAgent)) {
    return Platform.iOS;
  } else {
    return Platform.Android;
  }
};
