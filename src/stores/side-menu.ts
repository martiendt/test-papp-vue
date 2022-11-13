import { defineStore } from 'pinia'

export interface ShortcutInterface {
  name: string
  path: string
  meta: string
  icon: string
  menu: Array<MenuInterface>
  active?: boolean
}
export interface MenuInterface {
  name: string
  path: string
  meta: string
  separator?: boolean
  subMenu?: Array<SubMenuInterface>
  active?: boolean
}
export interface SubMenuInterface {
  name: string
  path: string
  meta: string
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
  name: 'Main Menu',
  path: '/',
  meta: 'main',
  icon: 'fa-regular fa-house',
  menu: [
    {
      name: 'Dashboard',
      path: '/',
      meta: 'dashboard',
    },
  ],
}

const menuTemplate = {
  name: 'Template',
  path: '/template',
  meta: 'template',
  icon: 'fa-regular fa-wand-magic-sparkles',
  menu: [
    {
      name: 'Element',
      path: 'element',
      meta: 'element',
      active: false,
      subMenu: [
        {
          name: 'Element Badge',
          path: '/template/element/element-badge',
          meta: 'element-badge',
        },
        {
          name: 'Element Button',
          path: '/template/element/element-button',
          meta: 'element-button',
        },
      ],
    },
    {
      name: 'Component',
      path: 'component',
      meta: 'component',
      active: false,
      subMenu: [
        {
          name: 'Component Accordion',
          path: '/template/component/component-accordion',
          meta: 'component-accordion',
        },
      ],
    },
  ],
}
