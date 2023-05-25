<template>
  <a :href="href" :class="{'is-light': light}" class="flex items-center p-3 text-gray-900 font-medium rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
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
    },
    light: {
      type: Boolean,
      required: false
    }
  },
}
</script>

<style lang="scss" scoped>
 @import "@/assets/styles/colors"; 
.is-light {
  color: $base-dark-color;
  &:hover {
    color: $base-light-color;
  }
}
</style>