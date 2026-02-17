<template>
  <div>
    <nav class="header__nav nav">
      <ul class="nav__list">
        <li v-for="item in data.links" :key="item.path" class="nav__item">
          <NuxtLink :to="item.path" class="nav__link">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps(["data"]);
</script>

<style scoped lang="scss">
.header {
  &__nav {
    background-color: var(--nav-bg);

    @media (max-width: 900px) {
      display: none;
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
</style>
