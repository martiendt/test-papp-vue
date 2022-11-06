<template>
  <!-- Sidebar -->
  <div class="print:hidden">
    <!-- Main Sidebar -->
    <div class="main-sidebar">
      <div
        class="flex h-full w-full flex-col items-center border-r border-slate-150 bg-navy-800 dark:border-navy-700 dark:bg-navy-800"
      >
        <!-- Application Logo -->
        <div class="flex pt-4">
          <a href="/">
            <img
              class="h-12 w-12 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
              src="@/assets/logo-icon.png"
              alt="logo"
            />
          </a>
        </div>
        <!-- Main Sections Links -->
        <div class="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
          <!-- Dashboards -->
          <a
            href="dashboards-crm-analytics.html"
            data-tooltip="Dashboards"
            data-placement="right"
            class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <fa-icon icon="fa-solid fa-house w-6 h-6" />
          </a>
          <a
            href="dashboards-crm-analytics.html"
            data-tooltip="Dashboards"
            data-placement="right"
            class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <fa-icon icon="fa-regular fa-wand-magic-sparkles w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <!-- Sidebar Panel -->
    <div class="sidebar-panel">
      <div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
        <!-- Sidebar Panel Header -->
        <div class="flex h-18 w-full items-center justify-between pl-4 pr-1">
          <p class="text-base tracking-wider text-slate-800 dark:text-navy-100">Templates</p>
          <component :is="ComponentToggleSidebar" v-if="windowWidth < 1280" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6" data-simplebar>
          <ul class="flex flex-1 flex-col px-4 font-inter">
            <li class="">
              <button
                class="flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
              >
                <span>Onboarding</span>
                <i class="fa-solid fa-angle-right"></i>
              </button>
              <ul class="">
                <li>
                  <a
                    href="pages-onboarding-1.html"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                    data-active-class="font-medium text-primary dark:text-accent-light"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>Onboarding v1</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="pages-onboarding-2.html"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                    data-active-class="font-medium text-primary dark:text-accent-light"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>Onboarding v2</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="">
              <button
                class="flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-500 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
              >
                <span>User Card</span>
                <i class="fa-solid fa-angle-right"></i>
              </button>
              <ul>
                <li>
                  <a
                    href="pages-card-user-1.html"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                    data-default-class="text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                    data-active-class="font-medium text-primary dark:text-accent-light"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>User Card 1</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="pages-card-user-2.html"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>User Card 2</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="my-3 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
const windowWidth = window.innerWidth
</script>

<style lang="postcss" scoped>
.main-sidebar {
  @apply fixed top-0 left-0 z-40 h-full w-[var(--main-sidebar-width)] shrink-0 -translate-x-full transform-gpu transition-transform duration-200 ease-in md:z-[60] md:translate-x-0 !bg-green-500;
}

.is-sidebar-open .main-sidebar {
  @apply translate-x-0;
}

.sidebar-panel {
  @apply fixed top-0 left-0 z-30 h-full w-[calc(var(--main-sidebar-width)+var(--sidebar-panel-width))] -translate-x-full transform-gpu shadow-soft transition-transform delay-150 duration-[.25s] ease-in dark:shadow-none md:delay-[unset];
}

.is-sidebar-open .sidebar-panel {
  @apply translate-x-0 ease-out;
}

.sidebar-panel-min {
  @apply fixed z-40 h-full w-[var(--sidebar-panel-min-width)] shrink-0 -translate-x-full transform-gpu shadow-soft transition-transform duration-[.25s] ease-in dark:shadow-none md:translate-x-[var(--main-sidebar-width)];
}

.is-sidebar-open .sidebar-panel-min {
  @apply -translate-x-full;
}
</style>
