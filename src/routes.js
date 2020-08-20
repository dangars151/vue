export const routes = [
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('./components/Detail.vue'),
  },
  {
    path: '/author/:author',
    name: 'Author',
    component: () => import('./components/Author.vue'),
  },
  { path: '/', component: () => import('./components/Main.vue') },
]
