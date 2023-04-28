<template>
  <button @click="handleMobileMenu" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="blick items-center fixed left-0 top-0 p-2 mt-4 ml-3 z-50 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-200">
    <span class="sr-only">Open sidebar</span>
    <Icon name="mobileMenu"/>
  </button>

  <aside id="default-sidebar" ref="asideMenu" :class="{ 'is-open': isOpen }" class="fixed z-40 w-80 xl:w-96 h-screen">
     <div class="aside-content h-full px-3 pt-16 pb-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <SidebarItem :link="link">
            <Icon name="dashboard"/>
          </SidebarItem>
        </ul>
     </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SidebarItem from '@/components/molecules/SidebarItem.vue';

export default defineComponent({
  name: 'SidebarMenu',
  components: { SidebarItem },

  setup () {
    let isOpen = ref(true);
    let isMobile = ref(false);
    const link = {
      text: 'test2',
      href: '#'
    }
    const handleMobileMenu = () => isOpen.value = !isOpen.value;

    const checkIsMobile = () => {
      if (window.innerWidth < 1024) {
        isOpen.value = false;
      } else {''
        isOpen.value = true;
      }
    }
    
     onMounted(() => {
      window.addEventListener('resize', () => checkIsMobile());
     })

    return { link, isOpen, handleMobileMenu, isMobile }
  }
 
})
</script>

<style scoped lang="scss">
aside {
  top: 0;
  left: -100%;
  transition:all .3s;
  
  .aside-content {
    @media (max-width: 768px) {
        padding-top: 6rem;
    }
  }
}
aside {
  &.is-open {
      left: 0;
  }
}
 
  
  

</style>