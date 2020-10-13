import React from 'react';
import './App.css';
import Header from '../Header';
import Footer from '../Footer/Footer';
import {Login} from '../../auth';

function App() {
  return (
    <div className="App container">
		<div className="row">
			<div className="col-12">
				<Header />
			</div>
		</div>
		
		<div className="row">
			<div className="col-12">
				<Login />
			</div>
		</div>
      
	  	<div className="row">
			<div className="col-12">
				<Footer />
			</div>
		</div>
    </div>
  );
}

export default App;
