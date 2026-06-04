import { ArrowRight, ArrowDown } from 'lucide-react';
import './Workflow.css';

const workflows = [
  {
    title: 'Project Setup',
    steps: [
      'Owner Creates Project',
      'Admin Assigns PM',
      'PM Creates Milestones'
    ]
  },
  {
    title: 'Supervision',
    steps: [
      'Progress Updated',
      'Evidence Uploaded',
      'Owner Reviews',
      'Approve / Reject'
    ]
  },
  {
    title: 'Procurement',
    steps: [
      'PM Creates RFQ',
      'Suppliers Submit',
      'Owner Reviews',
      'Supplier Selected'
    ]
  },
  {
    title: 'Communication',
    steps: [
      'Owner ↔ PM Chat',
      'Supplier ↔ PM',
      'Notifications',
      'Activity Logs'
    ]
  }
];

const Workflow = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center">
        <div className="container max-w-3xl mx-auto">
          <div className="badge badge-primary mb-6 mx-auto" style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>
            Platform Workflow
          </div>
          <h1 className="text-h1 text-white mb-6">End-to-End Construction Pipeline</h1>
          <p className="text-body-lg text-white opacity-80">See how data, communication, and approvals flow seamlessly across the Right Hand platform.</p>
        </div>
      </div>

      <section className="section bg-gradient-mesh">
        <div className="container">
          <div className="workflow-grid">
            {workflows.map((flow, idx) => (
              <div key={idx} className="premium-card workflow-column">
                <h2 className="text-h4 workflow-title text-center mb-6">{flow.title}</h2>
                <div className="workflow-steps-vertical">
                  {flow.steps.map((step, sidx) => (
                    <div key={sidx} className="workflow-step-wrapper">
                      <div className="workflow-step glass">
                        {step}
                      </div>
                      {sidx < flow.steps.length - 1 && (
                        <div className="workflow-arrow-down">
                          <ArrowDown size={20} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workflow;
