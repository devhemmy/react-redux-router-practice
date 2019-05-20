import React from 'react';
import Navbarc from "./components/Navbarc"
import Contact from "./components/Contact"
import About from "./components/About"
import Home from "./components/Home"
import Post from "./components/Post"
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <div> 
<Navbarc /> 

<Switch>
<Route exact path="/" render={()=> (  
          <Home />
     )} />
     <Route path="/about" render={()=> (
       <About />
     )} />
     <Route path="/contact" render={()=> (
       <Contact />
     )} />

    <Route path="/:post_id" component={Post} />
  </Switch>
      
    </div>
  );
}

export default App;
