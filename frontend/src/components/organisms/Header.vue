<template>
  <header class="bg-white border-gray-200 h-24 fixed top-0 left-0 w-full">
      <div class="flex flex-wrap justify-end items-center pr-4 h-full">
          <div class="flex">
              <a href="#" class="hover:underline">Konto</a>
               <Icon name="user-round"/>
          </div>
      </div>
    </header>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

</script>

<style scoped>
  header {
    box-shadow: 0px -15px 20px 0px rgba(0,0,0,0.75);
  }
</style>