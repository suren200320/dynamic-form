import Layout from '@/components/Layout.vue';
import Complex from '@/pages/Complex.vue';
import Home from '@/pages/Home.vue';
import Job from '@/pages/Job.vue';
import Rate from '@/pages/Rate.vue';
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/complex',
        name: 'Complex',
        component: Complex,
      },
      {
        path: '/rate',
        name: 'Rate',
        component: Rate,
      },
      {
        path: '/job',
        name: 'Job',
        component: Job,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
