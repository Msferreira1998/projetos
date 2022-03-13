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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
