<template>
  <!-- Sidebar -->
  <div class="print:hidden">
    <!-- Main Sidebar -->
    <div class="main-sidebar">
      <div class="flex h-full w-full flex-col items-center border-r bg-navy-800 border-navy-700">
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
        <div class="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6 text-navy-200">
          <a
            href="#"
            data-tooltip="Dashboards"
            data-placement="right"
            class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-navy-300/20 focus:bg-navy-300/20 active:bg-navy-300/25"
          >
            <fa-icon icon="fa-solid fa-house w-6 h-6" class="" />
          </a>
          <a
            href="#"
            data-tooltip="Dashboards"
            data-placement="right"
            class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-navy-300/20 focus:bg-navy-300/20 active:bg-navy-300/25"
          >
            <fa-icon icon="fa-regular fa-wand-magic-sparkles w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <!-- Sidebar Panel -->
    <div class="sidebar-panel">
      <div class="flex h-full grow flex-col bg-navy-750">
        <!-- Sidebar Panel Header -->
        <div class="flex h-18 w-full items-center justify-between pl-4 pr-1">
          <p class="text-base tracking-wider text-navy-100">Templates</p>
          <component :is="ComponentToggleSidebar" v-if="windowWidth < 1280" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6" data-simplebar>
          <ul class="flex flex-1 flex-col px-4 font-inter">
            <li class="">
              <button
                class="flex w-full items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out text-navy-200 hover:text-navy-50"
              >
                <span>Onboarding</span>
                <i class="fa-solid fa-angle-right"></i>
              </button>
              <ul class="">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 hover:text-navy-50 font-medium text-accent-light"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>Onboarding v1</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-navy-200 hover:text-navy-50"
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
                class="flex w-full items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out text-navy-200 hover:text-navy-50"
              >
                <span>User Card</span>
                <i class="fa-solid fa-angle-right"></i>
              </button>
              <ul>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-navy-200 hover:text-navy-50"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>User Card 1</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-navy-200 hover:text-navy-50"
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
          <div class="my-3 mx-4 h-px bg-navy-500"></div>
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
  @apply fixed w-[var(--main-sidebar-shortcut-width)] h-full z-40 -translate-x-full
  /* @apply fixed top-0 left-0 z-40 h-full w-[var(--main-sidebar-width)] shrink-0 -translate-x-full transform-gpu transition-transform duration-200 ease-in md:z-[60] md:translate-x-0 !bg-green-500; */;
}

.is-sidebar-open .main-sidebar {
  @apply translate-x-0;
}

.sidebar-panel {
  @apply fixed top-0 left-[var(--main-sidebar-shortcut-width)] h-full w-[var(--main-sidebar-panel-width)] z-30 -translate-x-[calc(100%+(var(--main-sidebar-shortcut-width)))] transform-gpu transition-transform duration-200
  /* @apply fixed top-0 left-0 z-30 h-full w-[calc(var(--main-sidebar-width)+var(--sidebar-panel-width))] -translate-x-full transform-gpu shadow-soft transition-transform delay-150 duration-[.25s] ease-in dark:shadow-none md:delay-[unset]; */;
}

.is-sidebar-open .sidebar-panel {
  @apply translate-x-0 ease-out;
}

.sidebar-panel-min {
  /* @apply fixed z-40 h-full w-[var(--sidebar-panel-min-width)] shrink-0 -translate-x-full transform-gpu shadow-soft transition-transform duration-[.25s] ease-in dark:shadow-none md:translate-x-[var(--main-sidebar-width)]; */
}

.is-sidebar-open .sidebar-panel-min {
  /* @apply -translate-x-full; */
}
</style>
