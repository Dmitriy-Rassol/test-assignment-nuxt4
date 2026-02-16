<template>
  <div class="product-card">
    <div class="product-card__inner">
      <button class="product-card__favorite" aria-label="Добавить в избранное">
        <Favorites></Favorites>
      </button>
      <NuxtLink :to="'#'" class="product-card__link">
        <div class="product-card__image-wrapper">
          <img
            class="product-card__image"
            :src="product.image"
            :alt="product.name"
            loading="lazy"
          />
        </div>

        <div class="product-card__content">
          <div class="product-card__prices">
            <span class="product-card__price"
              >{{ formatPrice(product.price) }} ₽</span
            >
            <span class="product-card__price-half"
              >{{ formatPrice(halfPrice) }} ₽ x2</span
            >
          </div>
          <p class="product-card__name">{{ product.name }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/products";
import Favorites from "../icons/Favorites.vue";

const props = defineProps<{
  product: Product;
}>();

const halfPrice = computed(() => Math.ceil(props.product.price / 2));

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__favorite {
    position: absolute;
    background: none;
    right: 0;
    z-index: 2;
    cursor: pointer;
  }
  &__image {
    width: 100%;
    height: 180px;
    object-fit: contain;
  }

  &__link {
    transition: opacity ease-in .2s;
    &:hover {
      opacity: 0.9;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__prices {
    display: flex;
    gap: 10px;
    align-items:center
  }

  &__price {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4em;
  }

  &__price-half {
    color: var(--secondary);
    background-color:var(--primary);
    padding: 4px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0px 4px 4px 0px #0000001F;
  }

  &__name {
    font-size: 16px;
    font-weight: 400;
  }


}
</style>
