<template>
  <div>
    <Header ></Header>
    <main style="padding: 20px; min-height: 200px;">
      <slot></slot>
    </main>
    <Footer></Footer>   
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';
</script>