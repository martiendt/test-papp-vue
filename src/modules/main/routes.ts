export const routes = {
  path: '/',
  component: () => import('@/layouts/app-layout.vue'),
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/home-page.vue'),
        },
      ],
    },
  ],
}
