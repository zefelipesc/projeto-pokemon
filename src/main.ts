import { createApp } from 'vue'
import App from './App.vue'
import Store from './components/Store'
import router from './router'

//import '@fortawesome/fontawesome-free/js/all'

createApp(App).use(router).use(Store).mount('#app')