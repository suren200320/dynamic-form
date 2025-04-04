import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './styles/main.css';
import clickOutside from './directives/clickOutside';

const app = createApp(App);

app.use(clickOutside);
app.use(router);
app.mount('#app');
