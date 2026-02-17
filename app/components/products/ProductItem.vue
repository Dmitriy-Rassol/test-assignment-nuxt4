<template>
  <div class="product-item">
    <div class="product-item__inner">
      <button class="product-item__favorite">
        <Favorites></Favorites>
      </button>
      <NuxtLink :to="'#'" class="product-item__link">
        <div class="product-item__image-wrapper">
          <img
            class="product-item__image"
            :src="product.image"
            :alt="product.name"
            loading="lazy"
          />
        </div>

        <div class="product-item__content">
          <div class="product-item__prices">
            <span class="product-item__price"
              >{{ formatPrice(product.price) }} ₽</span
            >
            <span class="product-item__price-half"
              >{{ formatPrice(halfPrice) }} ₽ x2</span
            >
          </div>
          <p class="product-item__name">{{ product.name }}</p>
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
.product-item{
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
    &__image-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 75%;
    overflow: hidden;
  }
  
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; 
    transition: transform 0.3s ease;
  }

  &__link {
    display: flex;
    flex-direction: column;
    gap: 31px;
    transition: opacity ease-in .2s;

     @media (max-width: 800px) {
      gap: 15px;
    }
    &:hover {
      opacity: 0.9;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;

     @media (max-width: 800px) {
      gap: 3px;
    }
  }

  &__prices {
    display: flex;
    gap: 10px;
    align-items:center;
    flex-wrap: nowrap;

    @media (max-width: 800px) {
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
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
