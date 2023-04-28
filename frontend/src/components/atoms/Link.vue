<template>
  <a :href="href" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
    <span v-text="text"></span>
  </a>
</template>

<script lang="ts">

export default {
  name: 'Link',
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>

</style>