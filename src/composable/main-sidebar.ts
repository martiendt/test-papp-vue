import type { ShortcutInterface, MenuInterface, SubMenuInterface } from '@/stores/side-menu'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { onMounted } from 'vue'
import { useMainSidebarStore } from '@/stores/main-sidebar'
import { useSideMenuStore } from '@/stores/side-menu'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useMainSidebar() {
  const mainSidebarStore = useMainSidebarStore()
  const sideMenuStore = useSideMenuStore()
  const route = useRoute()
  const { isMobile } = useMobileBreakpoint()

  onMounted(() => {
    setDefaultOpenSidebar()
  })

  watch(route, async () => {
    if (isMobile()) {
      mainSidebarStore.closeSidebar()
    }
  })

  /**
   * Set default open sidebar by breakpoint
   * sm, md, lg default sidebar is open
   * xl and 2xl default sidebar is closed
   */
  const setDefaultOpenSidebar = () => {
    if (isMobile()) {
      mainSidebarStore.closeSidebar()
    } else {
      mainSidebarStore.openSidebar()
    }
  }

  const onClickShortcut = (shortcut: MenuInterface) => {
    for (const sideMenuShortcut of sideMenuStore.shortcut) {
      if (sideMenuShortcut.meta === shortcut.meta) {
        sideMenuShortcut.active = true
        activeShortcut.value = sideMenuShortcut
      } else {
        sideMenuShortcut.active = false
      }
    }
  }

  const onClickMenu = (menu: MenuInterface) => {
    if (menu.subMenu === undefined) {
      menu.active = true
    } else {
      menu.active = !menu.active
    }
  }

  const setActiveShortcut = (items: ShortcutInterface[], route: RouteLocationNormalizedLoaded): ShortcutInterface => {
    for (const item of items) {
      item.active = false
      if (item.menu && setActiveMenu(item.menu, route)) {
        item.active = true
        return item
      }
    }

    return items[0]
  }

  const setActiveMenu = (items: MenuInterface[], route: RouteLocationNormalizedLoaded): MenuInterface | undefined => {
    for (const item of items) {
      if (item.subMenu === undefined) {
        item.active = false
      }

      if (item.subMenu !== undefined && setActiveSubMenu(item.subMenu, route)) {
        item.active = true
        return item.subMenu !== undefined ? item : undefined
      }

      if (item.meta === route.meta.menu) {
        item.active = true
        return item
      }
    }
  }

  const setActiveSubMenu = (
    items: SubMenuInterface[],
    route: RouteLocationNormalizedLoaded
  ): SubMenuInterface | undefined => {
    for (const item of items) {
      item.active = false
      if (item.meta === route.meta.subMenu) {
        item.active = true
        return item
      }
    }
  }

  /**
   * activeShortcut indicate which shortcut menu in sidebar is active,
   * if there is no active shortcut found, then first shortcut become active
   */
  const activeShortcut = ref(setActiveShortcut(sideMenuStore.shortcut, route))
  if (activeShortcut.value === undefined) {
    activeShortcut.value = sideMenuStore.shortcut[0]
  }

  return { onClickShortcut, onClickMenu, activeShortcut }
}
