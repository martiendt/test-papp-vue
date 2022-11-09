export const routes = {
  path: '/template',
  component: () => import('@/layouts/app-layout.vue'),
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: 'element-badge',
          component: () => import('./views/element-badge.vue'),
        },
        {
          path: 'element-button',
          component: () => import('./views/element-button.vue'),
        },
      ],
    },
  ],
}
