import { defineStore } from 'pinia'

export const useSideMenuShortcutStore = defineStore('side-menu-shortcut', {
  state: () => ({
    menu: [
      {
        icon: 'HomeIcon',
        pageName: 'side-menu-page-1',
        title: 'Page 1',
      },
      {
        icon: 'HomeIcon',
        pageName: 'side-menu-page-2',
        title: 'Page 2',
      },
    ],
  }),
})
