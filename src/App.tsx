import React from 'react';

import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import RenderArrays from './pages/RenderArrays';

function App() {
  return (
   <BrowserRouter>
      <Switch>
      
      {/* <Route exact path="/about" component={About}/> */}
        <Route exact={true} path="/about">
          <About />
        </Route>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/">
          I am a new route
        </Route>
        <Route exact path="/counter" component={Counter}/>
        <Route exact path="/list" component={RenderArrays}/>
        <Route path="*">
          404 not found
        </Route>
        

      </Switch>
   </BrowserRouter>
  );
}

export default App;
