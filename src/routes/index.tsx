import { HashRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import routes from './config';

const RouteConfig = () => {
  return (
    <Router basename="/blog">
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default RouteConfig;
