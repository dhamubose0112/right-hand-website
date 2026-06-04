import { 
  FolderGit2, 
  Target, 
  Camera, 
  CheckSquare, 
  FileSearch, 
  Store, 
  BellRing, 
  MessageCircle, 
  History 
} from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="badge badge-primary mb-6 mx-auto" style={{background: 'white', color: 'var(--primary)', border: '1px solid rgba(255,255,255,0.2)'}}>Platform Capabilities</div>
          <h1 className="text-h1 text-white mb-6">Everything you need to supervise construction</h1>
          <p className="text-body-lg text-white opacity-80">
            A comprehensive suite of tools designed to bring transparency, accountability, and efficiency to your residential projects.
          </p>
        </div>
      </div>

      <section className="section bg-gradient-mesh">
        <div className="container">
          <div className="bento-grid">
            
            {/* Large Card: Project Management */}
            <div className="premium-card bento-card bento-large-1">
              <div className="bento-content">
                <div className="bento-icon"><FolderGit2 size={32} /></div>
                <h3 className="text-h3 mb-2">Project Management</h3>
                <p className="text-body mb-4">Command central for your entire portfolio. Assign managers and track progress effortlessly.</p>
                <ul className="bento-list">
                  <li>Create Projects</li>
                  <li>Assign Project Managers</li>
                  <li>Monitor Progress</li>
                </ul>
              </div>
              <div className="bento-visual">
                <img src="/assets/pm_dashboard.png" alt="Project Management Dashboard" className="bento-image" />
              </div>
            </div>

            {/* Medium Card: Milestone Tracking */}
            <div className="premium-card bento-card bento-medium">
              <div className="bento-content">
                <div className="bento-icon"><Target size={32} /></div>
                <h3 className="text-h4 mb-2">Milestone Tracking</h3>
                <p className="text-body">Monitor stage-wise progress with precision timeline visibility.</p>
              </div>
            </div>

            {/* Medium Card: Evidence Management */}
            <div className="premium-card bento-card bento-medium">
              <div className="bento-content">
                <div className="bento-icon"><Camera size={32} /></div>
                <h3 className="text-h4 mb-2">Evidence Uploads</h3>
                <p className="text-body">Timestamped photo, video, and document records.</p>
              </div>
            </div>

            {/* Large Card: RFQ Procurement */}
            <div className="premium-card bento-card bento-large-2">
              <div className="bento-content">
                <div className="bento-icon"><FileSearch size={32} /></div>
                <h3 className="text-h3 mb-2">RFQ Procurement</h3>
                <p className="text-body mb-4">Streamline material quotation requests. Invite suppliers, track responses, and compare quotes in one place.</p>
                <ul className="bento-list">
                  <li>Create RFQs</li>
                  <li>Compare Quotes</li>
                  <li>Select Vendor</li>
                </ul>
              </div>
              <div className="bento-visual">
                <img src="/assets/rfq_dashboard.png" alt="RFQ Procurement Dashboard" className="bento-image" />
              </div>
            </div>

            {/* Small Cards */}
            <div className="premium-card bento-card bento-small">
              <div className="bento-icon"><CheckSquare size={24} /></div>
              <h4 className="font-semibold mt-4 mb-2">Approval Workflows</h4>
              <p className="text-sm text-secondary">Structured digital approvals and revision tracking.</p>
            </div>

            <div className="premium-card bento-card bento-small">
              <div className="bento-icon"><Store size={24} /></div>
              <h4 className="font-semibold mt-4 mb-2">Supplier Mgmt</h4>
              <p className="text-sm text-secondary">Centralized vendor onboarding and quotation submission.</p>
            </div>

            <div className="premium-card bento-card bento-small">
              <div className="bento-icon"><MessageCircle size={24} /></div>
              <h4 className="font-semibold mt-4 mb-2">Collaboration</h4>
              <p className="text-sm text-secondary">In-context chat for PMs, owners, and suppliers.</p>
            </div>

            <div className="premium-card bento-card bento-small">
              <div className="bento-icon"><History size={24} /></div>
              <h4 className="font-semibold mt-4 mb-2">Audit Trails</h4>
              <p className="text-sm text-secondary">Complete immutable record for compliance.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
