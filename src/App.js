import './style.css';
import Home from './home';
import Nav from './nav';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Logout from './logout';
import Create from './create';

function App() {
  return (
  <Router>
    <div className="app">
      <Nav />        
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />          
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
          </div>
        </div>
  </Router>
  );
}

export default App;
