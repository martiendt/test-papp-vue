<template>
  <div class="h-7 w-7">
    <button
      class="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
      @click="toggleSidebar()"
    >
      <div v-if="!mainSidebarStore.isSidebarOpen">
        <i class="fa-solid fa-bars" data-fa-transform="grow-5"></i>
      </div>
      <div v-if="mainSidebarStore.isSidebarOpen">
        <i class="fa-solid fa-xmark" data-fa-transform="grow-5"></i>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMainSidebarStore } from '@/stores/main-sidebar'

const mainSidebarStore = useMainSidebarStore()

const toggleSidebar = () => {
  mainSidebarStore.toggleSidebar()
}
</script>
