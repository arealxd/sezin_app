import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import api from "@/service/api"
import { languages } from "./i18n"
import { defaultLocale } from "./i18n"
import { createI18n, useI18n } from "vue-i18n"

const localStorageLang = localStorage.getItem("lang")

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: "en",
  messages,
})

const app = createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
app.use(i18n)
app.use(router)
app.use(api)
app.mount("#app")
