import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'

// sweet alert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// mitt
import mitt from 'mitt';

let emitter = mitt();


// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.use(router)
app.use(VueSweetalert2);

app.mount('#app');