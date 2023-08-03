import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import portuguese from "./locales/portuguese/index.json"
import english from "./locales/english/index.json"

const resources = {
  pt: { translation: portuguese },
  en: { translation: english },
}

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources,
})

export default i18n
