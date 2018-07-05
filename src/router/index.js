import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../docs/HomePage';
import newFile from '../docs/newFile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/file',
      name: 'newFile',
      component: newFile
    },
  ]
});
