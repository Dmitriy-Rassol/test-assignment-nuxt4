<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__main container">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";
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
      min-height: 600px;
    }
  }
}
</style>
