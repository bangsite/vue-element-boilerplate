import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { getCookie } from "@/utils/useCookies";

export const LoginGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.name === "Login" && getCookie("__x_key_at")) {
    return next({ name: "Dashboard" });
  } else next();
};
