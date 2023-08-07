
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './files/Home';
import Main from './files/Main';
import './index.css';
import Dashboard from './files/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/dashboard">
                        <Dashboard/>
                    </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
