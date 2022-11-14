<template>
  <app-preloader></app-preloader>

  <!-- Page Wrapper -->
  <div class="h-100vh flex grow bg-slate-50 dark:bg-slate-900">
    <app-main-sidebar class="print:hidden"></app-main-sidebar>
    <app-header class="print:hidden"></app-header>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppPreloader from '@/components/app-preloader.vue'
import AppMainSidebar from './app-main-sidebar.vue'
import AppHeader from './app-header.vue'
</script>
