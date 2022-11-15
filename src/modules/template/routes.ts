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
          path: 'avatar',
          component: () => import('./views/element/avatar.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            submenu: 'avatar',
          },
        },
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
        {
          path: 'typography',
          component: () => import('./views/element/typography.vue'),
          meta: {
            shortcut: 'template',
            menu: 'element',
            submenu: 'typography',
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
        {
          path: 'table',
          component: () => import('./views/component/table.vue'),
          meta: {
            shortcut: 'template',
            menu: 'component',
            submenu: 'table',
          },
        },
      ],
    },
    {
      path: 'form',
      component: () => import('./module-index.vue'),
      meta: {
        shortcut: 'template',
        menu: 'form',
      },
      children: [
        {
          path: 'switch',
          component: () => import('./views/form/switch.vue'),
          meta: {
            shortcut: 'template',
            menu: 'component',
            submenu: 'switch',
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
