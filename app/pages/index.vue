<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__title">Тестовое задание</h1>
      <Button :title="'В каталог'" page="hero" @click="goToCatalog"></Button>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});

const router = useRouter();

const goToCatalog = () => {
  router.push("/catalog");
};
</script>

<style scoped lang="scss">
.hero {
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
  }

  &__title {
    font-size: 64px;
    font-weight: 500;
    font-style: normal;
    line-height: 1.1em;

    @media (max-width: 800px) {
      font-size: 26px;
      max-width: min-content;
    }
  }
}
</style>
