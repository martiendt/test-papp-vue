<template>
  <button @click="toggleSidebar()">
    <div v-if="!mainSidebarStore.isSidebarOpen">
      <fa-icon icon="fa-solid fa-bars w-5 h-5"></fa-icon>
    </div>
    <div v-if="mainSidebarStore.isSidebarOpen">
      <fa-icon icon="fa-solid fa-xmark w-5 h-5"></fa-icon>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useMainSidebarStore } from '@/stores/main-sidebar'

const mainSidebarStore = useMainSidebarStore()

const toggleSidebar = () => {
  mainSidebarStore.toggleSidebar()
}
</script>
