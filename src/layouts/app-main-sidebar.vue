<template>
  <!-- Main Sidebar -->
  <div class="main-sidebar">
    <!-- Sidebar Shortcut -->
    <div class="main-sidebar-shortcut" :class="{ 'delay-200 duration-200': !mainSidebarStore.isSidebarOpen }">
      <div class="main-sidebar-shortcut-container">
        <div class="flex pt-4">
          <router-link to="/">
            <img class="main-sidebar-logo" src="@/assets/logo-icon.png" alt="logo" />
          </router-link>
        </div>
        <div class="main-sidebar-shortcut-body">
          <router-link
            v-for="shortcut in sideMenu.shortcut"
            :key="shortcut.icon"
            :to="shortcut.path"
            class="main-sidebar-shortcut-link"
            :class="{ 'bg-slate-500/20': shortcut.active }"
            @click="onClickShortcut(shortcut)"
          >
            <fa-icon :icon="shortcut.icon + ' w-6 h-6'" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Sidebar Panel -->
    <div class="main-sidebar-panel">
      <div class="main-sidebar-panel-container">
        <!-- Sidebar Panel Header -->
        <div class="main-sidebar-panel-header">
          <p class="text-base tracking-wider text-slate-100">{{ activeShortcut.name }}</p>
          <component :is="ComponentToggleSidebar" v-if="screenBreakpointStore.windowWidth < 1024" class="px-2" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="main-sidebar-panel-body">
          <ul class="flex flex-1 flex-col px-4">
            <li v-for="menu in activeShortcut.menu" :key="menu.name">
              <router-link :to="menu.path" class="menu-link-button" @click="onClickMenu(menu)">
                <span :class="{ 'text-white': menu.active }">{{ menu.name }}</span>
                <fa-icon
                  v-if="menu.subMenu"
                  icon="fa-solid fa-angle-right "
                  :class="{ 'rotate-90 transition transform-gpu ': menu.active }"
                />
              </router-link>
              <div v-if="menu.subMenu && menu.subMenu.length > 0">
                <ul
                  class="transition-all transform-gpu"
                  :class="{
                    'max-h-64 bg-slate-700 p-1 rounded-lg': menu.active,
                    'max-h-0 overflow-hidden': !menu.active,
                  }"
                >
                  <li v-for="subMenu in menu.subMenu" :key="subMenu.name" class="overflow-hidden">
                    <router-link :to="subMenu.path" class="submenu-link" @click="onClickSubMenu(subMenu)">
                      <div class="flex items-center space-x-2">
                        <div class="bullet-list"></div>
                        <span :class="{ 'text-white': subMenu.active }">{{ subMenu.name }}</span>
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
import { ref } from 'vue'
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
import { useMainSidebarStore } from '@/stores/main-sidebar'
import { useScreenBreakpointStore } from '@/stores/screen-breakpoint'
import { useSideMenuStore } from '@/stores/side-menu'
import type { ShortcutInterface, MenuInterface, SubMenuInterface } from '@/stores/side-menu'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const screenBreakpointStore = useScreenBreakpointStore()
const sideMenu = useSideMenuStore()
const mainSidebarStore = useMainSidebarStore()

const updateActiveMenu = (items: ShortcutInterface[] | MenuInterface[] | SubMenuInterface[], path: string) => {
  items.forEach((item) => {
    if (item.menu) {
      if (updateActiveMenu(item.menu, path)) {
        item.active = true
        return item
      }
    }
    if (item.subMenu) {
      if (updateActiveMenu(item.subMenu, path)) {
        item.active = true
        return item
      }
    }
    if (item.path === path) {
      item.active = true
      return item
    }

    return
  })
}

const activeShortcut = ref<ShortcutInterface>(updateActiveMenu(sideMenu.shortcut, route.path))

const onClickShortcut = (shortcut: ShortcutInterface) => {
  activeShortcut.value = shortcut
}

const onClickMenu = (menu: MenuInterface) => {
  menu.active = !menu.active
}

const onClickSubMenu = (subMenu: SubMenuInterface) => {
  subMenu.active = !subMenu.active
}

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
