<template>
  <button
    class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20 dark:active:bg-slate-300/25"
    @click="toggleDarkMode()"
  >
    <fa-icon v-if="isDarkMode" icon="fa-solid fa-sun-bright" transform="grow-8" />
    <fa-icon v-else icon="fa-regular fa-moon" transform="grow-8" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const htmlTag = document.getElementsByTagName('html')[0]
let isDarkMode = ref(htmlTag.classList.contains('dark'))

function toggleDarkMode() {
  if (htmlTag.classList.contains('dark')) {
    htmlTag.classList.remove('dark')
  } else {
    htmlTag.classList.add('dark')
  }

  isDarkMode.value = htmlTag.classList.contains('dark')
}
</script>
