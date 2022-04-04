import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Form1 from './pages/Login_Form';
import Form from './pages/Registration_Form';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		
		<Route path='/Login_Form' element={<Form1/>} />
		<Route path='/Registration_Form' element={<Form/>} />
	</Routes>
	</Router>
);
}

export default App;
