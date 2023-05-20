<template>
  <header class="bg-white border-gray-200 h-24 fixed top-0 left-0 w-full">
      <div class="flex flex-wrap justify-end items-center pr-4 h-full">
          <div class="flex items-center">
            <a @click="openDropdown">
              <Icon name="user-round"/>
            </a>
               <Dropdown :handleOpen="isHidden" :buttonVisible="isDropdownWithButton">
                <Link :href="link.href" :text="link.text"/>
                <Link #separated :href="link2.href" :text="link2.text"/>
               </Dropdown>
          </div>
      </div>
    </header>
</template>

<script setup lang="ts">
  import { defineComponent, ref } from 'vue';
  import Dropdown from '@/components/molecules/Dropdown.vue';
  import Link from '@/components/atoms/Link.vue';
  const isDropdownWithButton = false;
  const link = {
      text: 'konto',
      href: '#'
    }
  const link2 = {
      text: 'wyloguj',
      href: '#'
    }
  const isHidden = ref(true);

  const openDropdown = () => {
    // console.log(isHidden.value)
    isHidden.value = !isHidden.value;
  } 
  
</script>

<style scoped>
  header {
    box-shadow: 0px -15px 20px 0px rgba(0,0,0,0.75);
  }
</style>