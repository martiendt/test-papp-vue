<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useFontAwesome } from '@/composable/font-awesome'
import { useDarkMode } from '@/composable/dark-mode'

useFontAwesome()
useDarkMode()
</script>

<template>
  <RouterView />
</template>
