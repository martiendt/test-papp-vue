import { defineStore } from 'pinia'

export const useSideMenuPanelStore = defineStore('side-menu-panel', {
  state: () => ({
    menu: [
      {
        title: 'Page 1',
        separator: true,
        active: false,
        subMenu: [
          {
            title: 'Page 1.1',
          },
          {
            title: 'Page 1.2',
          },
        ],
      },
      {
        title: 'Page 2',
      },
      {
        title: 'Page 3',
        subMenu: [
          {
            title: 'Page 3.1',
          },
          {
            title: 'Page 3.2',
          },
        ],
      },
    ],
  }),
})
