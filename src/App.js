import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Imported components
import NavBar from './components/NavBar';
import Form from './components/Form';
import Home from './components/Home';

//Rendered from components
const App = () => {
  return (
    <div>

      <NavBar />

      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      <NavBar />

    </div>
  );
};
export default App;
