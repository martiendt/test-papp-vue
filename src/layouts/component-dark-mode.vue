<template>
  <button
    class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    @click="toggleDarkMode()"
  >
    <i class="fa-sharp fa-regular fa-sun-bright" data-fa-transform="grow-5"></i>
    <i class="fa-sharp fa-solid fa-moon" data-fa-transform="grow-5"></i>
  </button>
</template>

<script setup lang="ts">
function toggleDarkMode() {
  const htmlTag = document.getElementsByTagName('html')[0]
  if (htmlTag.classList.contains('dark')) {
    htmlTag.classList.remove('dark')
  } else {
    htmlTag.classList.add('dark')
  }
}
</script>
