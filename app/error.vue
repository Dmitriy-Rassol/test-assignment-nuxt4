<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main container">
      <div class="error">
        <h1 class="error__title">{{ error.status }}</h1>
        <NuxtLink to="/" class="error__link">На главную</NuxtLink>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
import AppHeader from "./components/common/AppHeader.vue";
import AppFooter from "./components/common/AppFooter.vue";

const props = defineProps<{ error: NuxtError }>();
</script>

<style scoped lang="scss">
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 1100px) {
      min-height: 400px;
    }

    @media (max-width: 500px) {
      min-height: 600px;
    }
  }
}

.error {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  &__title {
    font-size: 64px;
    font-weight: 500;
    font-style: normal;
    line-height: 1.1em;
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
