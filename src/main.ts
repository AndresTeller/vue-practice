import App from "./App.vue";
import router from "@/router";
import { createApp } from "vue";

import "./assets/index.css";
import "notyf/notyf.min.css";

const app = createApp(App)
  
app.use(router);
app.mount("#app")
