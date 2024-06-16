import { acceptHMRUpdate, defineStore } from "pinia";
import { setCookie } from "@/utils/useCookies";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    userInfo: <Auth.Shop>{ roles: ["ADMIN"] },
    tokens: <Auth.Tokens>{},
    layoutForm: "LoginForm",
    isLoading: false,
  }),

  getters: {
    isLogin(state) {
      return Boolean(state.tokens?.accessToken);
    },
  },

  actions: {
    setLayoutForm(name: string) {
      this.layoutForm = name;
    },
    setUserInfo(data: Record<string, any>) {
      const { _id, email } = data;

      if (_id) this.userInfo["id"] = _id;
      if (email) this.userInfo["email"] = email;
    },

    setToken(tokens: Record<string, string>) {
      const { accessToken, refreshToken } = tokens;

      if (accessToken) {
        this.tokens["accessToken"] = accessToken;
        // localStorage.setItem("x-key-at", accessToken);
        setCookie("__x_key_at", accessToken);
      }

      if (refreshToken) setCookie("__x_key_rf", refreshToken, { "max-age": 604800 });
    },

    resetAuth() {
      this.userInfo = <Auth.Shop>{};
      this.tokens = <Auth.Tokens>{};
    },
  },
});

if (import.meta?.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
