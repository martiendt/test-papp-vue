import { defineStore } from 'pinia'

export interface ShortcutInterface {
  icon: string
  name: string
  path: string
  menu: Array<MenuInterface>
  active?: boolean
}
export interface MenuInterface {
  name: string
  separator?: boolean
  path: string
  subMenu?: Array<SubMenuInterface>
  active?: boolean
}
export interface SubMenuInterface {
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
      name: 'Index',
      path: '/about',
    },
    {
      name: 'Dashboard',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
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
      path: '#',
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
