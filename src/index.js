import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Country from './components/Countries/Country'
import App from './components/App'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <div>
      <Switch>
      <Route exact path="/country/:alpha2Code" component={Country} />
      <Route exact path="/" component={App} />
      <Route render={() => <div>
        <p>Route doesnt exist</p>
          <Link to="/">
          <button className="btn">Back</button>
          </Link>
          </div>} />
      </Switch>
      </div>
    </Router>,
 document.getElementById('root'));
registerServiceWorker();
