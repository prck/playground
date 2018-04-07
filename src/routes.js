import Layout from './components/layout/Header.vue';
import Home from './components/Home.vue';
import Board from './components/board/Board.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import model from './components/Model.vue';

// import Stocks from './components/stock/Stocks.vue';

// import Portfolio from './components/portfolio/Portfolio.vue';

export const routes = [{
  path: '',
  name: 'home',
  components: {
    default: Home,
    'header-top': Layout,
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  components: {
    default: Dashboard,
    'header-top': Layout,
  }
}, {
  path: '/board',
  name: 'board',
  components: {
    default: Board,
    'header-top': Layout,
  }
}, {
  path: '/model',
  name: 'model',
  components: {
    default: model
  }
}, {
  path: '*',
  redirect: '/'
}];