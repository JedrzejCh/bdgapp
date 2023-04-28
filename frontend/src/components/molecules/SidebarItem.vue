<template>
  <li class="pl-4 py-2 flex items-center bg-gray-700 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
    <slot />
    <Link :href="link.href" :text="link.text"/>
  </li>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import Link from '@/components/atoms/Link.vue';
import type { PropType } from 'vue'
import { ISidebarLink } from '@/types/index.ts'; 

export default defineComponent({
  name: 'SidebarItem',
  components: {Link},
  props: {
    link: {
      type: Object as PropType<ISidebarLink>,
      required: true
    }
  },
  setup (props) {

    return {
    
    }
  }
})
</script>

<style scoped>

</style>