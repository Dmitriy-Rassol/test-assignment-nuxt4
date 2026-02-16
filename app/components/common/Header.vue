<template>
  <header class="header">
    <div class="header__container container">
      
    <NuxtLink class="header__logo logo" to="/">
        <span></span>
      </NuxtLink>

      <NavMenu :data="headerData"/>
      <button
        class="header__burger burger"
        type="button"
        aria-label="Открыть меню"
      >
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </button>

    </div>
  </header>
</template>

<script setup lang="ts">
import { headerData } from "~/constant/headerData";
import NavMenu from "../header/NavMenu.vue";
</script>

<style scoped lang="scss">
.header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
  }

  &__logo {
    display: block;
    width: 42px;
    height: 42px;
    background-color: var(--logo-bg);

    &:hover {
      opacity: 1;
    }
  }

  &__nav {
    background-color: var(--nav-bg);

    @media (max-width: 1200px) {
      display: none;
    }
  }

  &__burger {
    width: 42px;
    height: 42px;
    padding: 14px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    background: var(--nav-bg);
    visibility: hidden;

    @media (max-width: 1200px) {
      visibility: visible;
    }
  }
}

.nav {
  &__list {
    display: flex;
    gap: 40px;
    margin: 0;
    padding: 10px 24px;
  }

  &__link {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 16px;
    font-weight: 500;
  }
}

.burger {
  &__line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
  }
}
</style>
