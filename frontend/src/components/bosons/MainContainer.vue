<template>
  <div class="container mx-auto  min-h-screen max-h-full main-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, ref } from 'vue';

</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors";
  .main-container {
    @media (min-width: 1024px) {
      padding: 0 0 0 24rem;
    }
  }
</style> 