<template>
  <div class="footer__content">
    <div v-for="(section, key) in footerData" :key="key" class="footer__column">
      <h3 class="footer__title">{{ section.title }}</h3>
      <ul class="footer__list">
        <li
          v-for="(link, index) in section.links"
          :key="index"
          class="footer__item"
        >
          <NuxtLink :to="link.path" class="footer__link">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { footerData } from "~/constant/footerData";
</script>

<style scoped lang="scss">
.footer {
  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 60px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);

    }

     @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);

    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__title {
    font-size: 14px;
    color: var(--dark-text);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__item {
    font-size: 14px;
  }

  &__link {
    color: var(--secondary);
  }
}

// Адаптивность
@media (max-width: 768px) {
  .footer {
    &__container {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      padding: 40px 20px;
    }
  }
}
</style>
