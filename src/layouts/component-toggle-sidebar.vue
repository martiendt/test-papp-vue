<template>
  <div class="h-7 w-7">
    <button
      class="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
      @click="toggleSidebar()"
    >
      <div v-if="!isOpen">
        <i class="fa-solid fa-angle-left" data-fa-transform="grow-5"></i>
      </div>
      <div v-if="isOpen">
        <i class="fa-solid fa-angle-right" data-fa-transform="grow-5"></i>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
isOpen.value = false

const toggleSidebar = () => {
  console.log('isopen1 ', isOpen)
  isOpen.value = document.body.classList.contains('is-sidebar-open')
  console.log('isopen2 ', isOpen)
  if (isOpen.value) {
    document.body.classList.remove('is-sidebar-open')
    isOpen.value = false
  } else {
    document.body.classList.add('is-sidebar-open')
    isOpen.value = true
  }
}
</script>
