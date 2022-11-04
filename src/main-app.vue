<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useFontAwesome } from '@/composable/font-awesome'
import { useDarkMode } from '@/composable/dark-mode'

useFontAwesome()
useDarkMode()
</script>
