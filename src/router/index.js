import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/addnew',
    name: 'NewJobPost',
    component: () => import('../components/NewJobPost.vue')
  },
  {
    path: '/editpost/:post_slug',
    name: 'EditPost',
    component: () => import('../components/EditPost.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
