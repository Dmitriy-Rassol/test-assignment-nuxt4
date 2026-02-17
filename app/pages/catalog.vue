<template>
  <section class="catalog">
    <div class="catalog__container">
      <h1 class="catalog__title">Каталог</h1>
      <ProductsList />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});

import ProductsList from "~/components/products/ProductsList.vue";
</script>

<style scoped lang="scss">
.catalog {
  padding-bottom: 100px;

   @media (max-width: 900px) {
        padding-bottom: 40px;
    }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 42px;
    font-weight: 500;
    line-height: 1.1em;
    text-align: center;
    margin: 100px 0 0;

    @media (max-width: 900px) {
      margin: 20px 0 0;
    }
  }
}
</style>
