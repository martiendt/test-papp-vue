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
            submenu: 'badge',
          },
        },
        {
          path: 'button',
          component: () => import('./views/element/button.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            submenu: 'button',
          },
        },
        {
          path: 'breadcrumb',
          component: () => import('./views/element/breadcrumb.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            submenu: 'breadcrumb',
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
            submenu: 'accordion',
          },
        },
      ],
    },
  ],
}

export const pageRoutes = {
  path: '/page',
  component: () => import('@/layouts/full-layout.vue'),
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: 'signin',
          component: () => import('./views/page/signin.vue'),
        },
      ],
    },
  ],
}
