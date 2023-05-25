<template>
    <button v-if="buttonVisible" @click="openDropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <transition>
			<div v-if="hideDropdown || props.handleOpen" v-on-click-outside.bubble="dropdownHandler"  class="base-dropdown mt-4 mr-4 flex flex-col relative z-10 p-4 pb-0 rounded-lg ">
					<slot name="main"/>
					<div class="py-4 mt-auto separated">
							<slot name="separated" />
					</div>
			</div>
    </transition>
</template>

<script setup lang="ts">
import { ref, withDefaults } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import type { OnClickOutsideHandler } from '@vueuse/core';

interface Props {
	handleOpen?: boolean,
	buttonVisible?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	handleOpen: false,
	buttonVisible: true,
})

const dropdown = ref(null);
const hideDropdown = ref(false);


const openDropdown = () => {
    if (props.buttonVisible) {
        hideDropdown.value = !hideDropdown.value;
    }
}

const dropdownHandler: OnClickOutsideHandler = (event) => {
    hideDropdown.value = false
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors";

.base-dropdown {
	position: absolute;
	height: 0;
	width: 20rem;
	background: #fff;
	top: 100%;
	right: 0;
	height: fit-content;
	min-height: 20rem;
	filter: drop-shadow(80px 30px 30px rgba(#3754AA, 10%));
}
.separated {
	border-top: 1px solid #f0f0f0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.1s all;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
