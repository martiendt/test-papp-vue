import { describe, beforeEach, expect, it } from 'vitest'
import { useSidebarStore } from './sidebar'
import { setActivePinia, createPinia } from 'pinia'

describe('sidebar store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('defined', () => {
    const sidebarStore = useSidebarStore()
    expect(sidebarStore.$state.isSidebarOpen).toBeDefined()
    expect(sidebarStore.openSidebar).toBeDefined()
    expect(sidebarStore.closeSidebar).toBeDefined()
    expect(sidebarStore.toggleSidebar).toBeDefined()
  })
})
