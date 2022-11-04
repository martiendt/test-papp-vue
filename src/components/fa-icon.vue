<template>
  <span v-if="!isHidden">
    <i :class="props.icon" :data-fa-transform="transform"></i>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  transform: String,
  isHidden: {
    type: Boolean,
    default: false
  }
})
</script>