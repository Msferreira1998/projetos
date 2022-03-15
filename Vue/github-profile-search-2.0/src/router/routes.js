const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
  },
  {
    path: '/user/:userId',
    name: 'User',
    props: true,
    component: () => import('pages/user.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
