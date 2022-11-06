import { defineStore } from 'pinia'

export const useStoreLayout = defineStore('layout', {
  state: () => ({
    isSidebarOpen: document.body.classList.contains('is-sidebar-open'),
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
  },
})
