import { defineComponent, h } from 'vue'

const iconTypes = {
  'fas': 'fa-solid',
  'far': 'fa-regular',
  'fab': 'fa-brands',
  'fat': 'fa-thin',
  'fal': 'fa-light',
  'fad': 'fa-duotone',
}

const component = defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
      validator: (str: string) => new RegExp(/fa[srbtld]\s[\w-]+/, 'gi').test(str),
    },
  },
  computed: {
    computedIcon () {
      const [type, name] = this.icon.split(' ')
      const classes = []
      classes.push(iconTypes[type as keyof typeof iconTypes])
      classes.push('fa-' + name)
      classes.push('fa-fw')
      // classes.push('fa-sharp')

      return classes
    },
  },
  render () {
    return h('span', {}, h('i', { class: this.computedIcon }))
  },
})

export default {
  install (app: any) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = import.meta.env.VITE_FONTAWESOME_KIT
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)

    app.component('FaIcon', component)
  },
}
