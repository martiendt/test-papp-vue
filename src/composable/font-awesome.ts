import { fontAwesomeKit } from '@/config/font-awesome.js'

export function useFontAwesome() {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = fontAwesomeKit

  document.head.appendChild(script)
}
