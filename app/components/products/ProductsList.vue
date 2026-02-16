<template>
  <div class="products-section">
    <div class="product__list">
      <ProductCard
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div v-if="loading" class="products__loading">Загрузка...</div>

    <div v-else-if="error" class="products__error">
      <p class="products__error-text">Произошла ошибка, попробуйте позже</p>
      <Button
        :title="'Повторить'"
        @click="retryLoad"
        :disabled="retryLoading"
      />
    </div>

    <Button v-else-if="hasNextPage" :title="'Показать ещё'" @click="loadMore" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";
import Button from "~/components/Button.vue";
import type { ProductsResponse, Product } from "~/types/products";

const currentPage = ref(1);
const allProducts = ref<Product[]>([]);
const hasNextPage = ref(false);
const loading = ref(false);
const error = ref(false);
const retryLoading = ref(false);

const { data: initialData, pending: initialPending } =
  await useFetch<ProductsResponse>("/api/products", {
    query: {
      page: 1,
      limit: 16,
    },
  });

if (initialData.value) {
  allProducts.value = initialData.value.products;
  hasNextPage.value =
    initialData.value.pagination?.hasNextPage ||
    initialData.value.products.length === 16;
}

const loadMore = async () => {
  if (loading.value) return;

  loading.value = true;
  error.value = false;

  try {
    const nextPage = currentPage.value + 1;
    const { data, error: fetchError } = await useFetch<ProductsResponse>(
      "/api/products",
      {
        query: {
          page: nextPage,
          limit: 16,
        },
      },
    );

    if (fetchError.value) {
      throw new Error("Ошибка загрузки");
    }

    if (data.value) {
      allProducts.value = [...allProducts.value, ...data.value.products];
      currentPage.value = nextPage;
      hasNextPage.value =
        data.value.pagination?.hasNextPage || data.value.products.length === 16;
    }
  } catch (err) {
    error.value = true;
    console.error("Ошибка загрузки товаров:", err);
  } finally {
    loading.value = false;
  }
};

// Повторная загрузка при ошибке
const retryLoad = async () => {
  if (retryLoading.value) return;

  retryLoading.value = true;
  error.value = false;

  try {
    await loadMore();
  } finally {
    retryLoading.value = false;
  }
};
</script>

<style scoped lang="scss">
.products-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.product {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin: 110px 0;
    width: 100%;
  }
}

.products {
  &__loading {
    padding: 10px 24px;
    font-size: 14px;
    color: var(--primary);
  }

  &__error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    &-text { 
      padding: 10px 24px;
      font-size: 14px;
      font-size: 16px;
      color: var(--primary);
    }
  }
}
</style>
