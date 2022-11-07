import { defineStore } from 'pinia'

export const useStoreLayout = defineStore('layout', {
  state: () => ({
    isSidebarOpen: document.body.classList.contains('is-sidebar-open'),
    windowWidth: 0,
    windowHeight: 0,
    screenBreakpoint: 'sm',
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = document.body.classList.contains('is-sidebar-open')
      if (this.isSidebarOpen) {
        document.body.classList.remove('is-sidebar-open')
        this.isSidebarOpen = false
      } else {
        document.body.classList.add('is-sidebar-open')
        this.isSidebarOpen = true
      }
    },
    onResizeWindow() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
      const screens = [
        {
          breakpoint: 'sm',
          width: 640,
        },
        {
          breakpoint: 'md',
          width: 768,
        },
        {
          breakpoint: 'lg',
          width: 1024,
        },
        {
          breakpoint: 'xl',
          width: 1280,
        },
        {
          breakpoint: '2xl',
          width: 1536,
        },
      ]

      screens.every((el) => {
        if (this.windowWidth <= el.width) {
          this.screenBreakpoint = el.breakpoint
          return false
        }
        return true
      })
    },
  },
})
