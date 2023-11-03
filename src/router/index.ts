import App from "@/App.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUpPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
