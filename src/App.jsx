import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';  // Додайте імпорт для компонента Home
import About from './pages/About';  // Додайте імпорт для компонента About
import Projects from './pages/Projects';  // Додайте імпорт для компонента Projects
import Contact from './pages/Contact';  // Додайте імпорт для компонента Contact

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;

