<template>
  <span>
    <i :class="props.icon" :data-fa-transform="transform"></i>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  transform: {
    type: String,
    default: '',
  },
})
</script>
