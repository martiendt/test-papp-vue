<template>
  <span class="wait-for-fa">
    <i :class="props.icon" :data-fa-transform="transform"></i>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  transform: String,
})
</script>
