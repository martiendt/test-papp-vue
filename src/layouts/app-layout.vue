<template>
  <!-- <app-preloader></app-preloader> -->

  <!-- Page Wrapper -->
  <div class="min-h-100vh flex grow bg-slate-50 dark:bg-slate-900">
    <app-main-sidebar></app-main-sidebar>
    <app-header></app-header>
    <!-- <app-secondary-sidebar></app-secondary-sidebar> -->
    <!-- <app-mobile-searchbar></app-mobile-searchbar> -->
    <main class="main-content">
      <RouterView />
    </main>
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

<style lang="postcss" scoped>
.main-content {
  @apply w-full lg:w-full px-8;
}

.is-sidebar-open .main-content {
  @apply w-full lg:w-[calc(100%-(var(--main-sidebar-shortcut-width)+var(--main-sidebar-panel-width)))] lg:ml-[calc(var(--main-sidebar-shortcut-width)+var(--main-sidebar-panel-width))];
}
</style>
