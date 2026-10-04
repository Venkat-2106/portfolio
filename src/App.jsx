import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetail />} />
            <Route path='/journey' element={<Journey />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
