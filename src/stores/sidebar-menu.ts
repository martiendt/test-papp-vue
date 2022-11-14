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
  separator?: boolean
}

interface StateInterface {
  shortcut: Array<ShortcutInterface>
}

export const useSidebarMenuStore = defineStore('sidebar-menu', {
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
      meta: 'dashboard',
      path: '/',
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
          name: 'Avatar',
          meta: 'avatar',
          path: '/template/element/badge',
        },
        {
          name: 'Alert',
          meta: 'alert',
          path: '/template/element/badge',
        },
        {
          name: 'Button',
          meta: 'button',
          path: '/template/element/button',
        },
        {
          name: 'Button Group',
          meta: 'button-group',
          path: '/template/element/button',
        },
        {
          name: 'Badge',
          meta: 'badge',
          path: '/template/element/badge',
        },
        {
          name: 'Breadcrumb',
          meta: 'breadcrumb',
          path: '/template/element/badge',
        },
        {
          name: 'Card',
          meta: 'card',
          path: '/template/element/badge',
        },
        {
          name: 'Divider',
          meta: 'divider',
          path: '/template/element/badge',
        },
        {
          name: 'Mask',
          meta: 'mask',
          path: '/template/element/badge',
        },
        {
          name: 'Progress',
          meta: 'mask',
          path: '/template/element/badge',
        },
        {
          name: 'Skeleton',
          meta: 'mask',
          path: '/template/element/badge',
        },
        {
          name: 'Spinner',
          meta: 'mask',
          path: '/template/element/badge',
        },
        {
          name: 'Tag',
          meta: 'mask',
          path: '/template/element/badge',
        },
        {
          name: 'Tooltip',
          meta: 'mask',
          path: '/template/element/badge',
        },
      ],
    },
    {
      name: 'Component',
      meta: 'component',
      subMenu: [
        {
          name: 'Accordion',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Collapse',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Tab',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Dropdown',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Popover',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Modal',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Steps',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Timeline',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Menu List',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Notification',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Treeview',
          meta: 'accordion',
          path: '/template/component/accordion',
          separator: true,
        },
        {
          name: 'Table',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Table Advance',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
      ],
    },
    {
      name: 'Form',
      meta: 'form',
      subMenu: [
        {
          name: 'Form Layout 1',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Form Layout 2',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Form Layout 3',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Form Layout 4',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Form Layout 5',
          meta: 'accordion',
          path: '/template/component/accordion',
          separator: true,
        },
        {
          name: 'Input Text',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Input Group',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Input Mask',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Checkbox',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Radio',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Switch',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Select',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Textarea',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Range',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Datepicker',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Text Editor',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Form Upload',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
        {
          name: 'Form Validation',
          meta: 'accordion',
          path: '/template/component/accordion',
        },
      ],
    },
  ],
}
