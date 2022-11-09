import { defineStore } from 'pinia'

interface ShortcutInterface {
  icon: string
  name: string
  path: string
  menu: Array<MenuInterface>
  active?: boolean
}
interface MenuInterface {
  name: string
  path?: string
  subMenu?: Array<SubMenuInterface>
  active?: boolean
}
interface SubMenuInterface {
  name: string
  path: string
  active?: boolean
}

interface StateInterface {
  shortcut: Array<ShortcutInterface>
}

export const useSideMenuStore = defineStore('side-menu', {
  state: (): StateInterface => ({
    shortcut: [menuHome, menuTemplate],
  }),
})

const menuHome = {
  icon: 'fa-regular fa-house',
  name: 'Main Menu',
  path: '/',
  menu: [
    {
      name: 'Dashboard',
      path: '/',
    },
  ],
}

const menuTemplate = {
  icon: 'fa-regular fa-wand-magic-sparkles',
  name: 'Template',
  path: '/template/element-badge',
  menu: [
    {
      name: 'Element',
      active: false,
      subMenu: [
        {
          name: 'Element Badge',
          path: '/template/element-badge',
        },
        {
          name: 'Element Button',
          path: '/template/element-button',
        },
      ],
    },
  ],
}
