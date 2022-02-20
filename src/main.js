import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';

import './main.css';
import 'flowbite';

const app = createApp(App);

app.use(router);

app.use(mdiVue, {
    icons: mdijs,
});

app.mount('#app');
