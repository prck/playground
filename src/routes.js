import Header from './components/layout/Header.vue';
import Home from './components/Home.vue';
import Board from './components/board/Board.vue';
import Dashboard from './components/dashboard/Dashboard.vue';

export const routes = [{
  path: '',
  name: 'home',
  components: {
    default: Home,
    'header': Header,
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  components: {
    default: Dashboard,
    'header': Header,
  }
}, {
  path: '/board',
  name: 'board',
  components: {
    default: Board,
    'header': Header,
  }
}, {
  path: '*',
  redirect: '/'
}];