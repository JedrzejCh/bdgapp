<template>

</template>

<script lang="ts">
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';

const enabled = ref(true)
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}

</script>