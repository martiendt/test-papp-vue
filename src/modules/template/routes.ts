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
          path: 'element-badge',
          component: () => import('./views/element-badge.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            subMenu: 'element-badge',
          },
        },
        {
          path: 'element-button',
          component: () => import('./views/element-button.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            subMenu: 'element-button',
          },
        },
        {
          path: 'element-button/create',
          component: () => import('./views/element-button-create.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            subMenu: 'element-button',
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
          path: 'component-accordion',
          component: () => import('./views/component-accordion.vue'),
          meta: {
            shortcut: 'template',
            menu: 'component',
            subMenu: 'component-accordion',
          },
        },
      ],
    },
  ],
}
