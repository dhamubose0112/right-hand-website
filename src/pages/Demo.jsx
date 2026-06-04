import { useState } from 'react';
import { CheckCircle2, ShieldCheck, Clock, FileText } from 'lucide-react';
import './Demo.css';

const faqs = [
  { q: 'Is this available in UAE?', a: 'Yes. Our platform is fully localized and available for use in the UAE.' },
  { q: 'Can suppliers submit quotations?', a: 'Yes. Suppliers have a dedicated portal to submit and manage quotations directly.' },
  { q: 'Can owners approve milestones digitally?', a: 'Yes. Owners receive digital notifications and can approve milestones with a single click.' },
  { q: 'Does the platform support evidence uploads?', a: 'Yes. Timestamped photos and videos can be uploaded to track site progress accurately.' },
  { q: 'Is there an audit trail?', a: 'Yes. Every action is recorded in an immutable audit log for complete accountability.' },
  { q: 'Is payment processing included?', a: 'Not in the current stage. It is available as a custom integration based on customer requirements.' }
];

const Demo = () => {
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', role: '', country: '', phone: '', email: '', projects: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demo request submitted successfully! We will contact you shortly.');
    setFormData({
      fullName: '', companyName: '', role: '', country: '', phone: '', email: '', projects: '', message: ''
    });
  };

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-h1 text-white mb-6">Book a Product Demo</h1>
          <p className="text-body-lg text-white opacity-80">Discover how Right Hand helps homeowners, project managers, and suppliers collaborate efficiently through one digital platform.</p>
        </div>
      </div>

      <section className="section bg-gradient-mesh">
        <div className="container demo-container">
          
          <div className="demo-info-col">
            <h2 className="text-h2 mb-6">What to expect</h2>
            <div className="demo-expectations">
              <div className="demo-expectation-item">
                <CheckCircle2 size={24} className="text-primary" />
                <div>
                  <h4 className="text-h4 mb-1">Live Platform Walkthrough</h4>
                  <p className="text-body text-sm">See the real dashboard, project creation, and tracking in action.</p>
                </div>
              </div>
              <div className="demo-expectation-item">
                <ShieldCheck size={24} className="text-primary" />
                <div>
                  <h4 className="text-h4 mb-1">Tailored Solutions</h4>
                  <p className="text-body text-sm">Discuss your specific workflow and how Right Hand adapts to it.</p>
                </div>
              </div>
              <div className="demo-expectation-item">
                <Clock size={24} className="text-primary" />
                <div>
                  <h4 className="text-h4 mb-1">Quick Q&A Session</h4>
                  <p className="text-body text-sm">Get immediate answers to your technical and operational questions.</p>
                </div>
              </div>
            </div>

            <div className="demo-faq" style={{ marginTop: '6rem' }}>
              <h3 className="text-h3 mb-6">Frequently Asked Questions</h3>
              <div className="faq-list">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="faq-item">
                    <h4 className="font-semibold mb-2">{faq.q}</h4>
                    <p className="text-body text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="demo-form-col">
            <div className="premium-card demo-form-card glass">
              <h2 className="text-h3 mb-6">Schedule Your Session</h2>
              <form onSubmit={handleSubmit} className="demo-form">
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="input-group">
                    <label>Company Name</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Acme Construction" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Role *</label>
                    <div className="select-wrapper">
                      <select name="role" required value={formData.role} onChange={handleChange}>
                        <option value="">Select Role</option>
                        <option value="Home Owner">Home Owner</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Supplier">Supplier</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Country *</label>
                    <input type="text" name="country" required value={formData.country} onChange={handleChange} placeholder="United Arab Emirates" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+971 50 123 4567" />
                  </div>
                  <div className="input-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="input-group">
                  <label>Number of Projects (Active/Upcoming)</label>
                  <input type="number" name="projects" value={formData.projects} onChange={handleChange} placeholder="e.g. 5" />
                </div>

                <div className="input-group">
                  <label>Message</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us about your specific needs..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">Request Demo</button>
              </form>
              <div className="form-footer mt-4 text-center">
                <p className="text-sm text-secondary">
                  <FileText size={14} className="inline-icon" /> By submitting, you agree to our Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Demo;
