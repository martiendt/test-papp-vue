export const routes = {
  path: '/',
  component: () => import('@/layouts/app-layout.vue'),
  children: [
    {
      path: '/',
      component: () => import('./main-index.vue'),
      children: [
        {
          path: '/',
          component: () => import('./views/home-page.vue'),
        },
      ],
    },
  ],
}
