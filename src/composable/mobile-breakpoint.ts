import { useScreenBreakpointStore } from '@/stores/screen-breakpoint'

export function useMobileBreakpoint() {
  const screenBreakpointStore = useScreenBreakpointStore()
  const isMobile = () => {
    if (
      screenBreakpointStore.screenBreakpoint === 'sm' ||
      screenBreakpointStore.screenBreakpoint === 'md' ||
      screenBreakpointStore.screenBreakpoint === 'lg'
    ) {
      return true
    }
    return false
  }

  return { isMobile }
}
