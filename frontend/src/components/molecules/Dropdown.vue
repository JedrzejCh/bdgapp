<template>
    <button v-if="buttonVisible" @click="openDropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <div :class="classObject" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <slot />
        <div class="py-2">
            <slot name="separated" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, defineComponent, onMounted, onUpdated, reactive, ref, withDefaults } from 'vue'
    
    interface Props {
        handleOpen?: boolean,
        buttonVisible?: boolean
    }
    const props = withDefaults(defineProps<Props>(), {
        handleOpen: false,
        buttonVisible: true,
    })

    let hideDropdown = ref(true);

    const openDropdown = () => {
        if(props.buttonVisible) {
            hideDropdown.value = !hideDropdown.value;
        }
    }
    const classObject = reactive(() => {
        return {
        'hidden': props.handleOpen || hideDropdown.value,
    }
    })
    onUpdated(() => {
        console.log(classObject)
        console.log(props.handleOpen)
        
    })
</script>

<style lang="scss" scoped>
  
</style>