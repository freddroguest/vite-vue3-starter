import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import "primevue/resources/themes/lara-light-blue/theme.css";

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, { styled: true })
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("Button", Button)
app.use(router)

app.mount('#app')
