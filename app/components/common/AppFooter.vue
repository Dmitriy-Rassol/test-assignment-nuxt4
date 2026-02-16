<template>
  <footer class="footer">
    <div class="footer__container container">
      <FooterList :data="footerData" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterList from "../footer/FooterList.vue";
import { footerData } from "~/constant/footerData";
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--footer-bg);
  padding: 100px 0;

  @media (max-width: 700px) {
    padding: 60px 0;
  }
}
</style>
