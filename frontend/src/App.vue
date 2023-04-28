<template>
  <SidebarMenu/>
  <Header/>
  <MainContainer>
    <MainTemplate/>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContainer from '@/components/bosons/MainContainer.vue';
import MainTemplate from '@/components/templates/default.vue';
import SidebarMenu from '@/components/organisms/SidebarMenu.vue';
import Header from '@/components/organisms/Header.vue';

export default defineComponent({
  components: {
    MainContainer,
    MainTemplate,
    SidebarMenu,
    Header
  }
});
</script>

<style scoped lang="scss">
</style>
