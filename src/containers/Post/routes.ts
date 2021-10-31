import PostList from './List';
import PostDetail from './Detail';

const routes = [
  {
    path: '/',
    component: PostList,
    exact: true,
  },
  {
    path: '/:id',
    component: PostDetail,
    exact: true,
  },
];

export default routes;
