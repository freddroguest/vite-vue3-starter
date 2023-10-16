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
import OverlayPanel from "primevue/overlaypanel";
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import InputText from "primevue/inputtext";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(PrimeVue, { styled: true })
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("Button", Button)
app.component("OverlayPanel", OverlayPanel)
app.component('Sidebar', Sidebar)
app.component('Avatar', Avatar)
app.component("InputText", InputText)
app.use(router)

app.mount('#app')
