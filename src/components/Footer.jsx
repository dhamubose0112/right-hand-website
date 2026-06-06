import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="Right Hand Logo" className="footer-logo" />
            <p className="footer-description">
              The premier platform for Residential Construction Supervision & Procurement.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/workflow">How It Works</Link></li>
              <li><Link to="/roles">User Roles</Link></li>
              <li><Link to="/demo">Demo</Link></li>
              <li><a href="#" className="disabled">Pricing (Coming Soon)</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><Link to="/demo">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-notice" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', opacity: 0.7, marginBottom: '1rem' }}>
          <p>"We respect your privacy. Personal information collected through this website and platform is processed in accordance with our Privacy Policy and applicable UAE data protection laws. By using our services, you agree to such processing."</p>
        </div>
        
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>Copyright &copy; {new Date().getFullYear()} Right Hand. All rights reserved.</p>
          <p>Powered by Habytat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
