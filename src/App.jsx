import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <div>
          <Router>
            <ul>
              <li>home</li>
              <li>contato</li>
            </ul>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/company'>
                <Company />
              </Route>

              <Route exact path='/contact'>
                <Contact />
              </Route>

              <Route exact path='/newproject'>
                <NewProject />
              </Route>
            </Switch>
            <p>footer</p>
          </Router>
      </div>
  )
}

export default App
