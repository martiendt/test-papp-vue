<template>
  <!-- <app-preloader></app-preloader> -->

  <!-- Page Wrapper -->
  <div class="min-h-100vh flex grow bg-slate-50 dark:bg-slate-900">
    <app-main-sidebar></app-main-sidebar>
    <app-header></app-header>
    <!-- <app-secondary-sidebar></app-secondary-sidebar> -->
    <!-- <app-mobile-searchbar></app-mobile-searchbar> -->
    <RouterView />
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import AppPreloader from '@/components/app-preloader.vue'
import AppMainSidebar from './app-main-sidebar.vue'
import AppHeader from './app-header.vue'
// import AppSecondarySidebar from './app-secondary-sidebar.vue'
// import AppMobileSearchbar from './app-mobile-searchbar.vue'
// import AppFooter from './app-footer.vue'
</script>
