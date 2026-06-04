import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Roles from './pages/Roles';
import Workflow from './pages/Workflow';
import Demo from './pages/Demo';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
