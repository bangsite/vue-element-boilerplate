import { acceptHMRUpdate, defineStore } from "pinia";

export const useDialogStore = defineStore("DialogStore", {
  state: () => ({
    title: "",
    layoutName: "",
    data: {},
    active: false,
    activeFooter: false,
    rerender: false,
    width: "",
  }),

  getters: {
    getData: (state) => state.data,
  },

  actions: {
    setActive(active: boolean) {
      this.active = active;
    },
    setActiveFooter(activeFooter: boolean) {
      this.activeFooter = activeFooter;
    },
    setReRender(rerender: boolean) {
      this.rerender = rerender;
    },
    setLayoutName(name: string) {
      this.layoutName = name;
    },
    setTitle(title: string) {
      this.title = title;
    },
    setDataRender(data: {}) {
      this.data = data;
    },
  },
});

if (import.meta?.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDialogStore, import.meta.hot));
}
