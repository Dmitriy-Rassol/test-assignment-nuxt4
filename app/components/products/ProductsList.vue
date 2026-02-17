<template>
  <div class="products-section">
    <div class="product__list">
      <ProductItem
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div v-if="isLoading || initialPending" class="products__loading">
      Загрузка...
    </div>

    <div v-else-if="isError || initialError" class="products__error">
      <p class="products__error-text">Произошла ошибка, попробуйте позже</p>
      <Button
        :title="'Повторить'"
        @click="handleInitialRetry"
        :disabled="isRetryLoading || initialPending"
      />
    </div>

    <Button
      v-else-if="hasMoreProducts"
      :title="'Показать ещё'"
      @click="loadMoreProducts"
      :disabled="isLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import ProductItem from "./ProductItem.vue";
import Button from "~/components/Button.vue";
import type { ProductsResponse, Product } from "~/types/products";


const currentPage = ref(1);
const allProducts = ref<Product[]>([]);
const isLoading = ref(false);
const isError = ref(false);
const isRetryLoading = ref(false);
const totalProducts = ref(0);
const productsLimit = ref(16);

const hasMoreProducts = computed(() => {
  return allProducts.value.length < totalProducts.value;
});

const {
  data: initialData,
  pending: initialPending,
  error: initialError,
  refresh,
} = await useFetch<ProductsResponse>("/api/products", {
  query: {
    page: 1,
    limit: productsLimit.value,
  },
});

if (initialData.value) {
  updateProductsState(initialData.value);
}

function updateProductsState(response: ProductsResponse) {
  allProducts.value = response.products;
  totalProducts.value = response?.total || response.products.length;
  currentPage.value = response?.currentPage || 1;
}

async function fetchProducts(page: number) {
  try {
    const { data, error } = await useFetch<ProductsResponse>("/api/products", {
      query: {
        page,
        limit: productsLimit.value,
      },
    });

    if (error.value) {
      throw new Error(error.value.message);
    }

    return data.value;
  } catch (err) {
    console.error("Ошибка загрузки товаров:", err);
    throw err;
  }
}

async function loadMoreProducts() {
  if (isLoading.value || !hasMoreProducts.value) return;

  isLoading.value = true;
  isError.value = false;

  try {
    const nextPage = currentPage.value + 1;
    const response = await fetchProducts(nextPage);

    if (response) {
      allProducts.value = [...allProducts.value, ...response.products];
      currentPage.value = nextPage;
      totalProducts.value = response?.total || totalProducts.value;
    }
  } catch (err) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

async function handleInitialRetry() {
  if (isRetryLoading.value || initialPending.value) return;

  isRetryLoading.value = true;

  try {
    await refresh();

    if (initialData.value) {
      updateProductsState(initialData.value);
    }
  } catch (err) {
    console.error("Ошибка при повторной загрузке:", err);
  } finally {
    isRetryLoading.value = false;
  }
}

watch(allProducts, () => {
  if (allProducts.value.length > 0) {
    isError.value = false;
  }
});

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

    @media (max-width: 1000px) {
      margin: 40px 0;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
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
      font-size: 14px;
      align-items: center;
      color: var(--primary);
    }
  }
}
</style>
