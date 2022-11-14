export const routes = {
  path: '/template',
  component: () => import('@/layouts/app-layout.vue'),
  meta: {
    shortcut: 'template',
  },
  children: [
    {
      path: 'element',
      component: () => import('./module-index.vue'),
      meta: {
        shortcut: 'template',
        menu: 'element',
      },
      children: [
        {
          path: 'badge',
          component: () => import('./views/element/badge.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            subMenu: 'badge',
          },
        },
        {
          path: 'button',
          component: () => import('./views/element/button.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            subMenu: 'button',
          },
        },
        {
          path: 'button/create',
          component: () => import('./views/element/button-create.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            subMenu: 'button',
          },
        },
      ],
    },
    {
      path: 'component',
      component: () => import('./module-index.vue'),
      meta: {
        shortcut: 'template',
        menu: 'component',
      },
      children: [
        {
          path: 'accordion',
          component: () => import('./views/component/accordion.vue'),
          meta: {
            shortcut: 'template',
            menu: 'component',
            subMenu: 'accordion',
          },
        },
      ],
    },
  ],
}
