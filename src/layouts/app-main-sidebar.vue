<template>
  <!-- Main Sidebar -->
  <div class="main-sidebar">
    <!-- Sidebar Shortcut -->
    <div class="main-sidebar-shortcut" :class="{ 'delay-100 duration-200': !mainSidebarStore.isSidebarOpen }">
      <div class="main-sidebar-shortcut-container">
        <div class="flex pt-4">
          <router-link to="/">
            <img class="main-sidebar-logo" src="@/assets/logo-icon.png" alt="logo" />
          </router-link>
        </div>
        <div class="main-sidebar-shortcut-body">
          <button
            v-for="shortcut in mainSidebarMenuStore.shortcut"
            :key="shortcut.icon"
            class="main-sidebar-shortcut-link"
            :class="{ 'bg-slate-300/20': shortcut.active }"
            @click="onClickShortcut(shortcut)"
          >
            <fa-icon :icon="shortcut.icon + ' w-6 h-6'" />
          </button>
        </div>
      </div>
    </div>

    <!-- Sidebar Panel -->
    <div class="main-sidebar-panel">
      <div class="main-sidebar-panel-container">
        <!-- Sidebar Panel Header -->
        <div class="main-sidebar-panel-header">
          <p class="text-base tracking-wider text-slate-100">
            {{ activeShortcut.name }}
          </p>
          <component :is="ComponentToggleSidebar" v-if="isMobile()" class="px-2" />
        </div>

        <!-- Sidebar Panel Body -->
        <div class="main-sidebar-panel-body">
          <ul class="flex flex-1 flex-col px-4">
            <li v-for="menu in activeShortcut.menu" :key="menu.name">
              <!-- Sub Menu Wrapper -->
              <button
                v-if="menu.subMenu"
                class="menu-link-button"
                :class="{
                  '!text-white': route.meta.menu === menu.meta,
                  '!text-slate-100/80': route.meta.menu !== menu.meta,
                }"
                @click="onClickMenu(menu)"
              >
                {{ menu.name }}
                <fa-icon
                  v-if="menu.subMenu"
                  icon="fa-solid fa-angle-right "
                  :class="{ 'rotate-90 transition transform-gpu ': menu.active }"
                />
              </button>
              <!-- MENU -->
              <router-link
                v-else
                :to="menu.path as string"
                class="menu-link-button"
                :class="{
                  '!text-white': route.meta.menu === menu.meta,
                  '!text-slate-100/80': route.meta.menu !== menu.meta,
                }"
              >
                {{ menu.name }}
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
                    <router-link :to="subMenu.path" class="submenu-link">
                      <div class="flex items-center space-x-2">
                        <div class="bullet-list" :class="{ 'bg-white': route.meta.subMenu === subMenu.meta }"></div>
                        <span
                          :class="{
                            '!text-white': route.meta.subMenu === subMenu.meta,
                            '!text-slate-100/80': route.meta.subMenu !== subMenu.meta,
                          }"
                        >
                          {{ subMenu.name }}
                        </span>
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
import { useRoute } from 'vue-router'
import { useMainSidebar } from '@/composable/main-sidebar'
import { useMainSidebarStore } from '@/stores/main-sidebar'
import { useMainSidebarMenuStore } from '@/stores/main-sidebar-menu'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'
import ComponentToggleSidebar from './component-toggle-sidebar.vue'

const route = useRoute()
const mainSidebarMenuStore = useMainSidebarMenuStore()
const mainSidebarStore = useMainSidebarStore()
const { isMobile } = useMobileBreakpoint()
const { onClickShortcut, onClickMenu, activeShortcut } = useMainSidebar()
</script>
