import { Link } from 'react-router-dom';
import { 
  Eye, MessageSquare, Clock, ShoppingCart, ShieldCheck, FileText,
  CheckCircle2, Activity, HardHat, Users, Briefcase, ArrowRight, BarChart3, TrendingUp, Users2, FileCheck
} from 'lucide-react';
import './Home.css';

const problems = [
  { icon: <Eye size={24} />, title: 'No Visibility', desc: 'No visibility into actual site progress' },
  { icon: <MessageSquare size={24} />, title: 'Unclear Updates', desc: 'Fragmented communication and unclear updates' },
  { icon: <Clock size={24} />, title: 'Delayed Approvals', desc: 'Bottlenecks causing delayed approvals' },
  { icon: <ShoppingCart size={24} />, title: 'Inefficient Procurement', desc: 'Material procurement inefficiencies' },
  { icon: <ShieldCheck size={24} />, title: 'Lack of Accountability', desc: 'Missing accountability among stakeholders' },
  { icon: <FileText size={24} />, title: 'Missing Documentation', desc: 'Lost or missing project documentation' },
];

const features = [
  { title: 'Project Supervision', desc: 'End-to-end oversight of all construction activities' },
  { title: 'Milestone Tracking', desc: 'Monitor stage-wise progress with precision' },
  { title: 'Evidence Uploads', desc: 'Timestamped photo and video documentation' },
  { title: 'Approval Workflows', desc: 'Structured, digital approval processes' },
  { title: 'RFQ Procurement', desc: 'Streamlined material quotation requests' },
  { title: 'Supplier Management', desc: 'Centralized vendor onboarding and selection' },
  { title: 'Audit Trails', desc: 'Complete, immutable record of every action' },
  { title: 'Chat & Collaboration', desc: 'In-context communication for all stakeholders' },
];

const Home = () => {
  return (
    <div className="home-page animate-fade-up">
      {/* Premium Hero Section */}
      <section className="hero-section bg-gradient-mesh">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge badge-primary hero-badge animate-fade-up">
              <span className="badge-pulse"></span>
              Residential Construction Supervision & Procurement
            </div>
            <h1 className="hero-title text-h1 animate-fade-up delay-100">
              Complete Visibility for <br className="d-none-mobile"/> 
              <span className="text-gradient">Modern Construction</span>
            </h1>
            <p className="hero-subtitle text-body-lg animate-fade-up delay-200">
              Track milestones, approve progress, manage suppliers, and streamline material procurement from a single, unified command center.
            </p>
            <div className="hero-cta animate-fade-up delay-300">
              <Link to="/demo" className="btn btn-primary">
                Request Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/demo" className="btn btn-secondary">Book Consultation</Link>
            </div>
            
            <div className="hero-trust animate-fade-up delay-300">
              <div className="trust-item"><CheckCircle2 size={18} /> Real-Time Tracking</div>
              <div className="trust-item"><CheckCircle2 size={18} /> Digital Approvals</div>
              <div className="trust-item"><CheckCircle2 size={18} /> RFQ Procurement</div>
              <div className="trust-item d-none-mobile"><CheckCircle2 size={18} /> Complete Audit Trail</div>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-up delay-200">
            <div className="dashboard-wrapper">
              <div className="dashboard-glow"></div>
              <img src="/assets/dashboard.png" alt="Right Hand Dashboard" className="dashboard-img" />
              
              {/* Floating Cards */}
              <div className="float-card float-card-1 glass">
                <div className="float-icon-wrapper"><BarChart3 size={20} color="var(--primary)" /></div>
                <div>
                  <div className="float-value">24</div>
                  <div className="float-label">Active Projects</div>
                </div>
              </div>

              <div className="float-card float-card-2 glass">
                <div className="float-icon-wrapper"><TrendingUp size={20} color="var(--secondary)" /></div>
                <div>
                  <div className="float-value">92%</div>
                  <div className="float-label">Approval Rate</div>
                </div>
              </div>

              <div className="float-card float-card-3 glass">
                <div className="float-icon-wrapper"><FileCheck size={20} color="#10B981" /></div>
                <div>
                  <div className="float-value">18</div>
                  <div className="float-label">RFQs Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4">Construction Projects Often Suffer From</h2>
            <p className="text-body-lg mb-12">The traditional way of managing residential construction is broken. Communication is scattered, and visibility is low.</p>
          </div>
          <div className="grid grid-cols-3">
            {problems.map((prob, idx) => (
              <div key={idx} className="premium-card problem-card">
                <div className="problem-icon">{prob.icon}</div>
                <h3 className="text-h4 mb-2">{prob.title}</h3>
                <p className="text-body">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-gradient-mesh">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4">One Platform for Complete Project Control</h2>
            <p className="text-body-lg mb-12">Right Hand brings all your stakeholders into a single, structured digital environment.</p>
          </div>
          <div className="grid grid-cols-4 feature-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="premium-card feature-mini-card">
                <CheckCircle2 className="feature-check" size={24} />
                <h4 className="font-semibold mb-2">{feat.title}</h4>
                <p className="text-sm text-secondary">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview (Horizontal on desktop) */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4">Streamlined Workflow</h2>
            <p className="text-body-lg mb-12">From project inception to material procurement, experience a frictionless process.</p>
          </div>
          
          <div className="timeline-horizontal">
            {[
              'Create Project',
              'Assign PM',
              'Track Milestones',
              'Approve Progress',
              'Request Quotes',
              'Select Vendor'
            ].map((step, idx) => (
              <div key={idx} className="timeline-node">
                <div className="node-number">{idx + 1}</div>
                <div className="node-text">{step}</div>
                {idx < 5 && <div className="node-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gradient-mesh">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4">Built For Every Stakeholder</h2>
            <p className="text-body-lg mb-12">A platform that adapts to the needs of owners, managers, and suppliers.</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="premium-card benefit-card">
              <div className="benefit-header">
                <div className="benefit-icon-wrapper"><HardHat size={28} /></div>
                <h3 className="text-h3">Home Owners</h3>
              </div>
              <ul className="benefit-list">
                <li><CheckCircle2 size={18} className="text-primary"/> Real-time visibility</li>
                <li><CheckCircle2 size={18} className="text-primary"/> Structured approvals</li>
                <li><CheckCircle2 size={18} className="text-primary"/> Centralized project records</li>
              </ul>
            </div>
            
            <div className="premium-card benefit-card">
              <div className="benefit-header">
                <div className="benefit-icon-wrapper" style={{background: 'rgba(255, 167, 38, 0.1)', color: 'var(--secondary)'}}><Activity size={28} /></div>
                <h3 className="text-h3">Project Managers</h3>
              </div>
              <ul className="benefit-list">
                <li><CheckCircle2 size={18} className="text-secondary"/> Organized project execution</li>
                <li><CheckCircle2 size={18} className="text-secondary"/> Simplified reporting</li>
                <li><CheckCircle2 size={18} className="text-secondary"/> Faster approvals</li>
              </ul>
            </div>

            <div className="premium-card benefit-card">
              <div className="benefit-header">
                <div className="benefit-icon-wrapper" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10B981'}}><Briefcase size={28} /></div>
                <h3 className="text-h3">Suppliers</h3>
              </div>
              <ul className="benefit-list">
                <li><CheckCircle2 size={18} style={{color: '#10B981'}}/> Direct RFQ access</li>
                <li><CheckCircle2 size={18} style={{color: '#10B981'}}/> Faster quotation management</li>
                <li><CheckCircle2 size={18} style={{color: '#10B981'}}/> Procurement transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-banner premium-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', padding: '4rem', overflow: 'hidden', position: 'relative', backgroundColor: '#104A76' }}>
            <div className="cta-banner-content" style={{ position: 'relative', zIndex: 10, maxWidth: '500px' }}>
              <h2 className="text-h2 mb-6" style={{ color: '#ffffff' }}>Ready to Digitize Residential Construction?</h2>
              <div className="flex gap-4 flex-wrap">
                <Link to="/demo" className="btn" style={{backgroundColor: '#ffffff', color: 'var(--primary)', fontWeight: 'bold'}}>Schedule Demo</Link>
                <Link to="/demo" className="btn" style={{backgroundColor: 'transparent', color: '#ffffff', border: '1px solid #ffffff'}}>Contact Sales</Link>
              </div>
            </div>
            <div className="cta-banner-visual d-none-mobile" style={{ position: 'absolute', right: '-5%', top: '10%', width: '600px', transform: 'rotate(-5deg)', opacity: 0.8, zIndex: 1 }}>
              <img src="/assets/pm_dashboard.png" alt="Dashboard CTA" style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
