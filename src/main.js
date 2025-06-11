import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// MDI Icons
import '@mdi/font/css/materialdesignicons.css'

// Tailwind + Global CSS
import './style.css'
import './assets/tailwind.css'

// Autres plugins
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

// Créer Vuetify avec MDI comme set d'icônes
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'  // ← 💡 c'est cette ligne qui manquait
  }
})

// Créer et monter l'application Vue
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(PerfectScrollbar)
app.mount('#app')
