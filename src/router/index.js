import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Scene from '@/components/Scene';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/scene',
      name: 'Scene',
      component: Scene,
    },
  ],
});
