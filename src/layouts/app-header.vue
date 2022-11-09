<template>
  <!-- App Header Wrapper-->
  <nav class="header">
    <!-- App Header  -->
    <div class="header-container relative flex w-full">
      <!-- Header Items -->
      <div class="flex w-full items-center justify-between">
        <!-- Left: Sidebar Toggle Button -->
        <div class="flex">
          <component :is="ComponentToggleSidebar" class="pr-2" />
          <p>TITLE HERE</p>
        </div>

        <!-- Right: Header buttons -->
        <div class="-mr-1.5 flex items-center space-x-2">
          <!-- Mobile Search Toggle -->
          <button
            class="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20 dark:active:bg-slate-300/25 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5.5 w-5.5 text-slate-500 dark:text-slate-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Main Searchbar -->
          <div id="searchbar-wrapper" class="hidden sm:flex">
            <div class="relative mr-4 flex h-8">
              <input
                id="searchbar-ref"
                placeholder="Search here..."
                class="peer text-xs+ ring-primary/50 dark:ring-accent/50 h-full w-60 rounded-full bg-slate-100 px-4 pl-9 text-slate-800 hover:bg-slate-200 focus:ring dark:bg-slate-900/90 dark:text-slate-100 dark:placeholder:text-slate-300 dark:hover:bg-slate-900 dark:focus:bg-slate-900"
                type="text"
              />
              <div
                class="peer-focus:text-primary dark:peer-focus:text-accent pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 dark:text-slate-300"
              >
                <fa-icon icon="fa-regular fa-search w-4 h-4" class="w-8 h-8 flex items-center justify-center" />
              </div>
            </div>
          </div>

          <!-- Dark Mode Toggle -->
          <component :is="ComponentDarkMode" />

          <!-- Notification-->
          <div class="flex">
            <button
              class="btn relative rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20"
            >
              <fa-icon icon="fa-regular fa-bell w-5 h-5" class="w-8 h-8 flex items-center justify-center" />

              <span class="absolute -top-px -right-px flex h-3 w-3 items-center justify-center">
                <span class="bg-red-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-80"></span>
                <span class="bg-red-400 inline-flex h-2 w-2 rounded-full"></span>
              </span>
            </button>
          </div>

          <!-- Right Sidebar Toggle -->
          <button
            class="btn rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 dark:hover:bg-slate-300/20 dark:focus:bg-slate-300/20"
          >
            <fa-icon icon="fa-regular fa-grid-2 w-5 h-5" class="w-8 h-8 flex items-center justify-center" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ComponentDarkMode from './component-dark-mode.vue'
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
</script>

<style lang="postcss" scoped></style>
