import { useStoreLayout } from '@/stores/layout'
import { onMounted, nextTick, onBeforeUnmount } from 'vue'

export function useScreenSize() {
  const storeLayout = useStoreLayout()

  onMounted(async () => {
    storeLayout.onResizeWindow()
    await nextTick(() => {
      window.addEventListener('resize', storeLayout.onResizeWindow)
    })
  })

  onBeforeUnmount(async () => {
    await nextTick(() => {
      window.removeEventListener('resize', storeLayout.onResizeWindow)
    })
  })
}
