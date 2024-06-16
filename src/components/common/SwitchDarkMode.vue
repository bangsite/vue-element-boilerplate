<template>
  <div class="dark-mode flex item-center" @click="handleSwitch">
    <Icon :icon="'solar:moon-stars-bold'" height="20" v-if="darkMode"></Icon>
    <Icon :icon="'uil:sun'" height="20" v-else></Icon>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ThemeModeSwitch } from "@/types/theme";
import { Icon } from "@iconify/vue";

const props = withDefaults(defineProps<ThemeModeSwitch>(), {
  dark: false,
});

const emit = defineEmits<{ (event: "update:dark", darkMode: boolean): void }>();

const darkMode = computed({
  get() {
    return props.dark;
  },
  set(newValue: boolean) {
    emit("update:dark", newValue);
  },
});

function handleSwitch(event: MouseEvent) {
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  if (!document.startViewTransition) {
    darkMode.value = !darkMode.value;
    return;
  }

  const transition = document.startViewTransition(() => {
    darkMode.value = !darkMode.value;
  });

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
    document.documentElement.animate(
      {
        clipPath: darkMode.value ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 300,
        easing: "ease-in",
        pseudoElement: darkMode.value ? "::view-transition-new(root)" : "::view-transition-old(root)",
      }
    );
  });
}
</script>
<style></style>
