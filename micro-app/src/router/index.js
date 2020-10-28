

let prefix = '/';
if (window.__POWERED_BY_QIANKUN__) {
  prefix = '/child/';
}
const routes = [
  {
    path: `${prefix}template`,
    name: 'template',
    exact: true,
    component: () => import(/* webpackChunkName: "about" */ '../pages/template/index.vue'),
  },
  {
    path: `${prefix}template/list`,
    name: 'templateList',
    exact: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/template/list.vue'),
  },
  {
    path: `${prefix}components`,
    name: 'components',
    exact: true,
    component: () => import(/* webpackChunkName: "about" */ '../pages/components/index.vue'),
  },
  {
    path: `${prefix}components/list`,
    name: 'componentsList',
    exact: true,
    component: () => import(/* webpackChunkName: "about" */ '../pages/components/list.vue'),
  }
];

export default routes;
