import React from 'react';
// onda de las rutas
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// importando navegacion
import Navigation from './components/Navigation'
// 
import SumasList from './components/SumasList'
// importando sumaslist
import CreateSuma from './components/CreateSuma'

function App() {
  return (
    <Router>
      <Navigation/>
      
      <div className="container p-4">
         <Route path="/" exact component={SumasList}/>
         <Route path="/edit/:id" component={CreateSuma}/>
         <Route path="/create" component={CreateSuma}/>
         </div> 


         

    </Router>
  );
 
  
}

export default App;
