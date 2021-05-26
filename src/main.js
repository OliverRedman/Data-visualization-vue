import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)
app.use(VueApexCharts);


app.use(store)

app.mount('#app')
