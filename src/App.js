 import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/Contact';
import Error from './pages/error';
import MainPg from './MainPg'
function App() {
return (
	<>
	
	<Router>
	<Routes>
		<Route path='/' element={<MainPg/>} >
		<Route index element={<Home />}/>
		<Route path='/About' element={<About/>} />
		<Route path='/Contact' element={<Contact/>} />
		<Route path='*' element={<Error/>} />
		</Route>
	</Routes>
	</Router>
	</>
);
}

export default App;
