export const routes = {
  path: '/',
  component: () => import('@/layouts/app-layout.vue'),
  meta: {
    shortcut: 'main',
  },
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/main-dashboard.vue'),
          meta: {
            shortcut: 'main',
            menu: 'dashboard',
          },
        },
      ],
    },
  ],
}
