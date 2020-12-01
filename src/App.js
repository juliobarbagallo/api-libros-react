import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Modules/Footer';
import Header from './Modules/Header';
import Home from './Modules/Home';
import Autores from './Modules/Autores';
import Contact from './Modules/Contact';

const App = () => {  
  return(
    <Router>
      <div id="mContainer">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/autores" component={Autores}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )

}

export default App;

