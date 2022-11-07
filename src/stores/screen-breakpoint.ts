import { defineStore } from 'pinia'

export const useScreenBreakpointStore = defineStore('screen-breakpoint', {
  state: () => ({
    windowWidth: 0,
    windowHeight: 0,
    screenBreakpoint: 'sm',
  }),
  actions: {
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