import { defineStore } from 'pinia'

export interface ShortcutInterface {
  name: string
  meta: string
  icon: string
  menu: Array<MenuInterface>
  active?: boolean
  path?: string
}

export interface MenuInterface {
  name: string
  meta: string
  active?: boolean
  path?: string
  separator?: boolean
  subMenu?: Array<SubMenuInterface>
}

export interface SubMenuInterface {
  name: string
  meta: string
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
  name: 'Main Menu',
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
  meta: 'template',
  icon: 'fa-regular fa-wand-magic-sparkles',
  menu: [
    {
      name: 'Element',
      meta: 'element',
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
      meta: 'component',
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
