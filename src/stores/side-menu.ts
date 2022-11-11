import { defineStore } from 'pinia'

export interface ShortcutInterface {
  code: string
  name: string
  path: string
  icon: string
  menu: Array<MenuInterface>
  active?: boolean
}
export interface MenuInterface {
  code: string
  name: string
  path: string
  separator?: boolean
  subMenu?: Array<SubMenuInterface>
  active?: boolean
}
export interface SubMenuInterface {
  code: string
  name: string
  path: string
  active?: boolean
}

interface StateInterface {
  shortcut: Array<ShortcutInterface>
}

export const useSideMenuStore = defineStore('side-menu', {
  state: (): StateInterface => ({
    shortcut: [menuMain, menuTemplate],
  }),
})

const menuMain = {
  code: 'main',
  name: 'Main Menu',
  path: '/',
  icon: 'fa-regular fa-house',
  menu: [
    {
      code: 'dashboard',
      name: 'Dashboard',
      path: '/',
    },
  ],
}

const menuTemplate = {
  code: 'template',
  name: 'Template',
  path: '/template/element-badge',
  icon: 'fa-regular fa-wand-magic-sparkles',
  menu: [
    {
      code: 'element',
      name: 'Element',
      path: '#',
      active: false,
      subMenu: [
        {
          code: 'element-badge',
          name: 'Element Badge',
          path: '/template/element-badge',
        },
        {
          code: 'element-button',
          name: 'Element Button',
          path: '/template/element-button',
        },
      ],
    },
    {
      code: 'component',
      name: 'Component',
      path: '#',
      active: false,
      subMenu: [
        {
          code: 'component-accordion',
          name: 'Component Accordion',
          path: '/template/component-accordion',
        },
      ],
    },
  ],
}
