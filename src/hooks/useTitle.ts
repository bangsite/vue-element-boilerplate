import { watch, ref } from "vue";
import { isString } from "@/utils/isCheck";
import { useAppStoreWithOut } from "@/stores/app.store";

const appStore = useAppStoreWithOut();

export const useTitle = (newTitle?: string) => {
  const title = ref(newTitle ? `${appStore.getTitle} - ${$t(newTitle as string)}` : appStore.getTitle);

  watch(
    title,
    (n, o) => {
      if (isString(n) && n !== o && document) {
        document.title = n;
      }
    },
    { immediate: true }
  );

  return title;
};
