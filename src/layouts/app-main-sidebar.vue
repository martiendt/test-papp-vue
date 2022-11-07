<template>
  <!-- Sidebar -->
  <div class="main-sidebar print:hidden">
    <!-- Main Sidebar -->
    <div class="main-sidebar-shortcut">
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
          <component :is="ComponentToggleSidebar" v-if="screenBreakpointStore.windowWidth < 1024" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6">
          <ul class="flex flex-1 flex-col px-4 font-inter">
            <li v-for="menu in sideMenuPanelStore.menu" :key="menu.title" class="">
              <button
                class="flex w-full items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out text-navy-200 hover:text-navy-50"
              >
                <span>{{ menu.title }}</span>
                <fa-icon v-if="menu.subMenu" icon="fa-solid fa-angle-right"></fa-icon>
              </button>
              <ul v-for="subMenu in menu.subMenu" :key="subMenu.title" class="">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-navy-200 hover:text-navy-50"
                  >
                    <div class="flex items-center space-x-2">
                      <div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div>
                      <span>{{ subMenu.title }}</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div v-if="menu.separator" class="my-3 h-px bg-slate-700"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
import { useScreenBreakpointStore } from '@/stores/screen-breakpoint'
import { useSideMenuPanelStore } from '@/stores/side-menu-panel'

const screenBreakpointStore = useScreenBreakpointStore()
const sideMenuPanelStore = useSideMenuPanelStore()
</script>

<style lang="postcss" scoped>
.is-sidebar-open .main-sidebar {
  @apply fixed w-full h-full bg-black/50 z-30 lg:bg-black/0 lg:w-0 lg:h-0;
}

.main-sidebar-shortcut {
  @apply fixed w-[var(--main-sidebar-shortcut-width)] h-full z-40 -translate-x-full opacity-100 bg-slate-700
  /* @apply fixed top-0 left-0 z-40 h-full w-[var(--main-sidebar-width)] shrink-0 -translate-x-full transform-gpu transition-transform duration-200 ease-in md:z-[60] md:translate-x-0 !bg-green-500; */;
}

.is-sidebar-open .main-sidebar-shortcut {
  @apply translate-x-0;
}

.sidebar-panel {
  @apply fixed top-0 left-[var(--main-sidebar-shortcut-width)] h-full w-[var(--main-sidebar-panel-width)] z-30 -translate-x-[calc(100%+(var(--main-sidebar-shortcut-width)))] transform-gpu transition-transform duration-200 opacity-100
  /* @apply fixed top-0 left-0 z-30 h-full w-[calc(var(--main-sidebar-width)+var(--sidebar-panel-width))] -translate-x-full transform-gpu shadow-soft transition-transform delay-150 duration-[.25s] ease-in dark:shadow-none md:delay-[unset]; */;
}

.is-sidebar-open .sidebar-panel {
  @apply translate-x-0 ease-out;
}
</style>
