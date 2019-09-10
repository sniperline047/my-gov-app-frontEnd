import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
    return (
    	<Router>
		    <div className="App">
	    		<Route exact path="/" component={Landing} />
	    		<Route exact path="/register" component={Register} />
	    		<Route exact path="/login" component={Login} />
	    		<Route exact path="/profile" component={Profile} />
		    </div>
	    </Router>
    );
}

export default App;
