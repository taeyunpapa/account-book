import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { loadFonts } from './plugins/webfontloader'
import VCalendar from 'v-calendar'
import 'v-calendar/dist/style.css';

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VCalendar)
  .mount('#app')
