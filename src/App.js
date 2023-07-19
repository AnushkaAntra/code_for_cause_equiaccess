
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './files/Home';
import Main from './files/Main';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
