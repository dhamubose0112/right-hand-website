import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/assets/logo.png" alt="Right Hand Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-links d-none-mobile">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link>
            <Link to="/roles" className={location.pathname === '/roles' ? 'active' : ''}>User Roles</Link>
            <Link to="/workflow" className={location.pathname === '/workflow' ? 'active' : ''}>How It Works</Link>
          </nav>

          <div className="navbar-actions d-none-mobile">
            <Link to="/demo" className="btn btn-secondary" style={{ marginRight: '1rem', border: 'none', boxShadow: 'none' }}>Log In</Link>
            <Link to="/demo" className="btn btn-primary">Request Demo</Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-menu-btn d-flex-mobile" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/roles">User Roles</Link>
          <Link to="/workflow">How It Works</Link>
        </nav>
        
        <div className="mobile-menu-footer">
          <Link to="/demo" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Request Demo</Link>
          <Link to="/demo" className="btn btn-secondary" style={{ width: '100%' }}>Book Consultation</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
