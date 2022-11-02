<template>
  <div class="flex flex-col justify-center py-5 lg:py-6">
    <h2 class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">Blank Template</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus unde rem, tempora aspernatur officia nostrum
      voluptas sequi tempore, quaerat reiciendis sapiente iste, deleniti laborum nulla. Id reiciendis cumque officia
      reprehenderit?
    </p>
    <button
      class="sidebar-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
      @click="toggleSidebar()"
    >
      <i v-if="!isOpen" class="fa-solid fa-angle-left" data-fa-transform="grow-5"></i>
      <i v-if="isOpen" class="fa-solid fa-angle-right" data-fa-transform="grow-5"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
const toggleSidebar = () => {
  if (isOpen.value == false) {
    isOpen.value = true
  } else {
    isOpen.value = false
  }
  console.log(isOpen)
}
</script>
