import ko_msg from "../datas/messages/ko.json";
import en_msg from "../datas/messages/en.json";
import { useContext } from "react";
import { LocaleContext } from "../contexts/localeContext";

export function useMessage() {
  const locale = useContext(LocaleContext);

  switch (locale) {
    case "ko":
      return ko_msg;
    case "en":
      return en_msg;
    default:
      return ko_msg;
  }
}
