import Layout from './components/layout/Header.vue';
import Home from './components/Home.vue';
import Board from './components/board/Board.vue';
import Dashboard from './components/dashboard/Dashboard.vue';

export const routes = [{
  path: '',
  name: 'home',
  components: {
    default: Home,
    'header': Layout,
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  components: {
    default: Dashboard,
    'header': Layout,
  }
}, {
  path: '/board',
  name: 'board',
  components: {
    default: Board,
    'header': Layout,
  }
}, {
  path: '*',
  redirect: '/'
}];