import React from 'react';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNav from './views/topNav/TopNav';


function App() {
  return (
    <Router>
      <div className="App">
      <TopNav/>
      {routes}
      </div>
    </Router>
  );
}

export default App;
