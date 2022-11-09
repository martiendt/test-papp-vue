<template>
  <!-- Sidebar -->
  <div class="main-sidebar print:hidden">
    <!-- Main Sidebar -->
    <div class="main-sidebar-shortcut" :class="{ 'delay-200 duration-200': !mainSidebarStore.isSidebarOpen }">
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
          <p class="text-base tracking-wider text-slate-100">Templates</p>
          <component :is="ComponentToggleSidebar" v-if="screenBreakpointStore.windowWidth < 1024" class="px-2" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="main-sidebar-panel-body">
          <ul class="flex flex-1 flex-col px-4">
            <li v-for="menu in sideMenuPanelStore.menu" :key="menu.title">
              <button class="menu-link-button" @click="menu.active = !menu.active">
                <span>{{ menu.title }}</span>
                <fa-icon
                  v-if="menu.subMenu"
                  icon="fa-solid fa-angle-right "
                  :class="{ 'rotate-90 transition transform-gpu': menu.active }"
                ></fa-icon>
              </button>
              <div v-if="menu.subMenu && menu.subMenu.length > 0">
                <ul
                  class="transition-all transform-gpu"
                  :class="{
                    'max-h-64 bg-slate-700 p-1 rounded-lg': menu.active,
                    'max-h-0 overflow-hidden': !menu.active,
                  }"
                >
                  <li v-for="subMenu in menu.subMenu" :key="subMenu.title" class="overflow-hidden">
                    <router-link to="#" class="submenu-link">
                      <div class="flex items-center space-x-2">
                        <div class="bullet-list"></div>
                        <span>{{ subMenu.title }}</span>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
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
import { useMainSidebarStore } from '@/stores/main-sidebar'
import { useScreenBreakpointStore } from '@/stores/screen-breakpoint'
import { useSideMenuPanelStore } from '@/stores/side-menu-panel'
import { onMounted } from 'vue'

const screenBreakpointStore = useScreenBreakpointStore()
const sideMenuPanelStore = useSideMenuPanelStore()
const mainSidebarStore = useMainSidebarStore()

/**
 * Set default open sidebar by breakpoint
 * sm, md, lg default is open sidebar
 * xl and 2xl default is closed sidebar
 */
const setDefaultOpenSidebar = () => {
  if (
    screenBreakpointStore.screenBreakpoint === 'sm' ||
    screenBreakpointStore.screenBreakpoint === 'md' ||
    screenBreakpointStore.screenBreakpoint === 'lg'
  ) {
    mainSidebarStore.closeSidebar()
  } else {
    mainSidebarStore.openSidebar()
  }
}

onMounted(() => {
  setDefaultOpenSidebar()
})
</script>
