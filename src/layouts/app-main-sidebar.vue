<template>
  <!-- Sidebar -->
  <div class="main-sidebar print:hidden">
    <!-- Main Sidebar -->
    <div class="main-sidebar-shortcut">
      <div class="main-sidebar-shortcut-container">
        <div class="flex pt-4">
          <router-link to="/">
            <img class="main-sidebar-logo" src="@/assets/logo-icon.png" alt="logo" />
          </router-link>
        </div>
        <div class="main-sidebar-shortcut-body">
          <router-link to="#" class="main-sidebar-shortcut-link">
            <fa-icon icon="fa-solid fa-house w-6 h-6" />
          </router-link>
          <router-link to="#" class="main-sidebar-shortcut-link">
            <fa-icon icon="fa-regular fa-wand-magic-sparkles w-6 h-6" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Sidebar Panel -->
    <div class="main-sidebar-panel">
      <div class="main-sidebar-panel-container">
        <!-- Sidebar Panel Header -->
        <div class="main-sidebar-panel-header">
          <p class="text-base tracking-wider text-navy-100">Templates</p>
          <component :is="ComponentToggleSidebar" v-if="screenBreakpointStore.windowWidth < 1024" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="main-sidebar-panel-body">
          <ul class="flex flex-1 flex-col px-4">
            <li v-for="menu in sideMenuPanelStore.menu" :key="menu.title" class="">
              <button class="menu-link-button" @click="menu.active = !menu.active">
                <span>{{ menu.title }}</span>
                <fa-icon
                  v-if="menu.subMenu"
                  icon="fa-solid fa-angle-right"
                  :class="{ 'rotate-90': menu.active }"
                ></fa-icon>
              </button>
              <template v-if="menu.active">
                <ul v-for="subMenu in menu.subMenu" :key="subMenu.title" class="">
                  <li>
                    <router-link to="#" class="submenu-link">
                      <div class="flex items-center space-x-2">
                        <div class="bullet-list"></div>
                        <span>{{ subMenu.title }}</span>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </template>
              <div v-if="menu.separator" class="menu-separator"></div>
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
.main-sidebar-logo {
  @apply h-12 w-12 transition-transform duration-500 ease-in-out hover:rotate-[360deg];
}

.is-sidebar-open .main-sidebar {
  @apply fixed w-full h-full bg-black/50 z-30 lg:bg-black/0 lg:w-0 lg:h-0;
}

.main-sidebar-shortcut {
  @apply fixed w-[var(--main-sidebar-shortcut-width)] h-full z-40 -translate-x-full opacity-100 bg-slate-700;
}

.main-sidebar-shortcut-container {
  @apply flex h-full w-full flex-col items-center border-r bg-navy-800 border-navy-700;
}

.main-sidebar-shortcut-body {
  @apply is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6 text-navy-200;
}

.is-sidebar-open .main-sidebar-shortcut {
  @apply translate-x-0;
}

.main-sidebar-shortcut-link {
  @apply flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-navy-300/20 focus:bg-navy-300/20 active:bg-navy-300/25;
}

.main-sidebar-panel {
  @apply fixed top-0 left-[var(--main-sidebar-shortcut-width)] h-full w-[var(--main-sidebar-panel-width)] z-30 -translate-x-[calc(100%+(var(--main-sidebar-shortcut-width)))] transform-gpu transition-transform duration-200 opacity-100;
}

.is-sidebar-open .main-sidebar-panel {
  @apply translate-x-0 ease-out;
}

.main-sidebar-panel-container {
  @apply flex h-full grow flex-col bg-navy-750;
}

.main-sidebar-panel-header {
  @apply flex h-18 w-full items-center justify-between pl-4 pr-1;
}

.main-sidebar-panel-body {
  @apply h-[calc(100%-4.5rem)] overflow-x-hidden pb-6;
}

.main-sidebar-panel-body .menu-separator {
  @apply my-3 h-px bg-slate-700;
}

.main-sidebar-panel-body .bullet-list {
  @apply h-1.5 w-1.5 rounded-full border border-current opacity-40;
}

.main-sidebar-panel-body .menu-link-button {
  @apply flex w-full items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out text-navy-200 hover:text-navy-50;
}

.main-sidebar-panel-body .submenu-link {
  @apply flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 text-navy-200 hover:text-navy-50;
}
</style>
