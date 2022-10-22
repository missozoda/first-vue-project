import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n} from 'vue-i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

const defLang = localStorage.getItem('lang')


const i18n = createI18n({
  locale: defLang || "en",
  messages:{
    en:{
      home:"Home",
      about:"About Us",
      project:"Projects",
      contacts:"Contact Us",
      services:"Services",
      switchLang:"Uz",
      heroTitle:"Building things is our mission."
    },
    uz:{
      home:"Asosiy",
      about:"Biz haqimizda",
      project:"Loyihalar",
      contacts:"Kontaktlar",
      services:"Servislar",
      switchLang:"En",
      heroTitle:"Qurilish ishlari bizning vazifamiz."
    }
  }
})

createApp(App).use(VueAxios, axios).use(i18n).use(router).mount('#app')