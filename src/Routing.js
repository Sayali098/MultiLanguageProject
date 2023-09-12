import Home from './Components/Home';
import About from './Components/About';
import { Switch, Route } from 'react-router-dom';

function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Routing;
