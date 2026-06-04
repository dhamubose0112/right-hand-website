import { UserCheck, Shield, Hammer, Truck, ArrowRight } from 'lucide-react';
import './Roles.css'; 

const rolesData = [
  {
    title: 'Home Owners',
    subtitle: 'Full visibility and control',
    icon: <UserCheck size={40} />,
    color: 'var(--primary)',
    bg: 'linear-gradient(135deg, rgba(16, 74, 118, 0.1) 0%, rgba(16, 74, 118, 0.05) 100%)',
    capabilities: [
      'Create Projects',
      'Monitor Progress',
      'Review Evidence',
      'Approve Milestones',
      'Compare Quotes',
      'Select Suppliers'
    ]
  },
  {
    title: 'Project Managers',
    subtitle: 'Streamlined site execution',
    icon: <Hammer size={40} />,
    color: 'var(--secondary)',
    bg: 'linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(255, 167, 38, 0.05) 100%)',
    capabilities: [
      'Manage Projects',
      'Create Milestones',
      'Upload Progress',
      'Create RFQs',
      'Communicate with Suppliers'
    ]
  },
  {
    title: 'Suppliers',
    subtitle: 'Direct procurement access',
    icon: <Truck size={40} />,
    color: '#10B981',
    bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
    capabilities: [
      'Receive RFQs',
      'Submit Quotations',
      'Track RFQ Status',
      'Manage Responses'
    ]
  },
  {
    title: 'Admin Team',
    subtitle: 'Platform governance',
    icon: <Shield size={40} />,
    color: '#8B5CF6',
    bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)',
    capabilities: [
      'Manage Users',
      'Manage Projects',
      'Approve Suppliers',
      'Monitor Platform Activity'
    ]
  }
];

const Roles = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center">
        <div className="container max-w-3xl mx-auto">
          <div className="badge badge-primary mb-6 mx-auto" style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>
            User Roles
          </div>
          <h1 className="text-h1 text-white mb-6">Designed For Every Stakeholder</h1>
          <p className="text-body-lg text-white opacity-80">A unified platform that connects everyone involved in the residential construction lifecycle securely and efficiently.</p>
        </div>
      </div>

      <section className="section bg-gradient-mesh">
        <div className="container">
          <div className="grid grid-cols-2 roles-grid">
            {rolesData.map((role, idx) => (
              <div key={idx} className="premium-card role-card">
                <div className="role-header">
                  <div 
                    className="role-icon-wrapper" 
                    style={{ background: role.bg, color: role.color }}
                  >
                    {role.icon}
                  </div>
                  <div>
                    <h2 className="text-h3 mb-1">{role.title}</h2>
                    <p className="text-sm text-secondary">{role.subtitle}</p>
                  </div>
                </div>
                <div className="role-capabilities">
                  {role.capabilities.map((cap, cidx) => (
                    <div key={cidx} className="capability-item">
                      <span className="capability-check" style={{ color: role.color }}>✓</span>
                      <span className="capability-text">{cap}</span>
                    </div>
                  ))}
                </div>
                <div className="role-footer" style={{marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)'}}>
                  <a href="#" className="role-link" style={{color: role.color}}>
                    Explore capabilities <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roles;
