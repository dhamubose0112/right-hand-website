import React from 'react';

const Terms = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center" style={{ padding: '6rem 0 4rem' }}>
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-h1 text-white mb-4">Terms & Conditions</h1>
          <p className="text-body-lg text-white opacity-80">Effective Date: [DATE]<br />Last Updated: [DATE]</p>
        </div>
      </div>
      
      <section className="section bg-canvas">
        <div className="container max-w-4xl mx-auto premium-card">
          <div className="prose text-left">
            
            <h2 className="text-h3 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-body mb-4">Welcome to [COMPANY NAME] ("Company", "Platform", "we", "our", or "us").</p>
            <p className="text-body mb-4">These Terms & Conditions ("Terms") govern access to and use of:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Our website</li>
              <li>Web applications</li>
              <li>Software platform</li>
              <li>Services</li>
              <li>Content</li>
              <li>Communication tools</li>
            </ul>
            <p className="text-body mb-4">By accessing or using the Platform, you agree to be legally bound by these Terms.</p>
            <p className="text-body mb-8 font-semibold">If you do not agree, you must discontinue use of the Platform.</p>

            <h2 className="text-h3 mb-4">2. COMPANY INFORMATION</h2>
            <ul className="text-body mb-8 list-none">
              <li><strong>Company Name:</strong> [COMPANY NAME]</li>
              <li><strong>Jurisdiction:</strong> Sharjah, United Arab Emirates</li>
              <li><strong>Registered Address:</strong> [REGISTERED ADDRESS]</li>
              <li><strong>Email:</strong> [EMAIL]</li>
              <li><strong>Website:</strong> [WEBSITE URL]</li>
            </ul>

            <h2 className="text-h3 mb-4">3. PLATFORM DESCRIPTION</h2>
            <p className="text-body mb-4">The Platform provides digital tools for:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Residential construction supervision</li>
              <li>Project milestone tracking</li>
              <li>Evidence uploads</li>
              <li>Construction progress monitoring</li>
              <li>RFQ creation and management</li>
              <li>Supplier quotation management</li>
              <li>Communication between stakeholders</li>
              <li>Audit trail management</li>
              <li>Reporting and project visibility</li>
            </ul>
            <p className="text-body mb-4">The Platform acts solely as a technology service provider.</p>
            <p className="text-body mb-8 font-semibold">The Company is not a contractor, consultant, architect, engineer, project manager, supplier, developer, or construction professional.</p>

            <h2 className="text-h3 mb-4">4. USER ELIGIBILITY</h2>
            <p className="text-body mb-4">Users must:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Be at least 18 years old</li>
              <li>Have authority to act on behalf of their organization where applicable</li>
              <li>Provide accurate information</li>
              <li>Comply with all applicable laws</li>
            </ul>
            <p className="text-body mb-8">The Company reserves the right to suspend or terminate accounts that violate these Terms.</p>

            <h2 className="text-h3 mb-4">5. USER ACCOUNTS</h2>
            <p className="text-body mb-4">Users are responsible for:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Maintaining account confidentiality</li>
              <li>Protecting passwords</li>
              <li>Restricting unauthorized access</li>
              <li>Ensuring information remains accurate</li>
            </ul>
            <p className="text-body mb-8">Users remain responsible for all activities conducted under their account.</p>

            <h2 className="text-h3 mb-4">6. USER ROLES</h2>
            <p className="text-body mb-4">The Platform may support:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-h4 mb-2">Home Owners</h3>
                <p className="text-body mb-2">May:</p>
                <ul className="text-body list-disc pl-5">
                  <li>Create projects</li>
                  <li>Monitor progress</li>
                  <li>Approve or reject milestones</li>
                  <li>Review quotations</li>
                  <li>Select suppliers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-h4 mb-2">Project Managers</h3>
                <p className="text-body mb-2">May:</p>
                <ul className="text-body list-disc pl-5">
                  <li>Manage project workflows</li>
                  <li>Upload evidence</li>
                  <li>Create milestones</li>
                  <li>Create RFQs</li>
                  <li>Communicate with stakeholders</li>
                </ul>
              </div>
              <div>
                <h3 className="text-h4 mb-2">Suppliers</h3>
                <p className="text-body mb-2">May:</p>
                <ul className="text-body list-disc pl-5">
                  <li>Receive RFQs</li>
                  <li>Submit quotations</li>
                  <li>Respond to procurement requests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-h4 mb-2">Administrators</h3>
                <p className="text-body mb-2">May:</p>
                <ul className="text-body list-disc pl-5">
                  <li>Manage platform operations</li>
                  <li>Manage users</li>
                  <li>Monitor activities</li>
                  <li>Maintain system integrity</li>
                </ul>
              </div>
            </div>

            <h2 className="text-h3 mb-4">7. PROJECT DATA RESPONSIBILITY</h2>
            <p className="text-body mb-4">Users acknowledge that:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Project information is user-generated.</li>
              <li>The Company does not independently verify project information.</li>
              <li>The Company is not responsible for project accuracy.</li>
              <li>The Company does not guarantee construction quality.</li>
              <li>The Company does not supervise physical construction activities.</li>
            </ul>
            <p className="text-body mb-8 font-semibold">Users remain solely responsible for project decisions.</p>

            <h2 className="text-h3 mb-4">8. MILESTONE APPROVALS</h2>
            <p className="text-body mb-4">Milestone approvals represent user decisions only. Approval of a milestone does not constitute:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Engineering certification</li>
              <li>Construction approval</li>
              <li>Structural approval</li>
              <li>Regulatory approval</li>
              <li>Compliance certification</li>
            </ul>
            <p className="text-body mb-8">Users should obtain independent professional advice where necessary.</p>

            <h2 className="text-h3 mb-4">9. RFQ AND PROCUREMENT DISCLAIMER</h2>
            <p className="text-body mb-4">The Platform facilitates quotation exchange only. The Company does not:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Guarantee supplier performance</li>
              <li>Guarantee pricing accuracy</li>
              <li>Verify supplier capabilities</li>
              <li>Endorse suppliers</li>
              <li>Guarantee material quality</li>
              <li>Guarantee delivery timelines</li>
            </ul>
            <p className="text-body mb-8 font-semibold">Any procurement relationship exists solely between participating parties.</p>

            <h2 className="text-h3 mb-4">10. SUPPLIER RESPONSIBILITIES</h2>
            <p className="text-body mb-4">Suppliers represent and warrant that:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Submitted information is accurate.</li>
              <li>Pricing is genuine.</li>
              <li>They possess necessary licenses.</li>
              <li>They comply with applicable regulations.</li>
              <li>Quotations are submitted in good faith.</li>
            </ul>
            <p className="text-body mb-8">The Company may suspend suppliers providing misleading information.</p>

            <h2 className="text-h3 mb-4">11. COMMUNICATIONS & CHAT</h2>
            <p className="text-body mb-4">The Platform may provide communication tools including: Owner ↔ Project Manager chat, Supplier ↔ Project Manager chat, Notifications, Comments, and Messaging systems.</p>
            <p className="text-body mb-4">Users agree:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Communications may be stored.</li>
              <li>Communications may be audited.</li>
              <li>Communications may be used for dispute resolution.</li>
              <li>Communications must remain professional and lawful.</li>
            </ul>
            <p className="text-body mb-8">The Company reserves the right to remove inappropriate content.</p>

            <h2 className="text-h3 mb-4">12. USER CONTENT</h2>
            <p className="text-body mb-4">Users retain ownership of content uploaded to the Platform including: Photos, Videos, Drawings, RFQs, Quotations, and Project documents.</p>
            <p className="text-body mb-8">By uploading content, users grant the Company a non-exclusive license to: Store, Process, Display, Backup, and Transmit such content solely for operation of the Platform.</p>

            <h2 className="text-h3 mb-4">13. PROHIBITED USES</h2>
            <p className="text-body mb-4">Users shall not:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Upload unlawful content</li>
              <li>Upload malicious software</li>
              <li>Attempt unauthorized access</li>
              <li>Disrupt platform operations</li>
              <li>Impersonate others</li>
              <li>Submit fraudulent quotations</li>
              <li>Violate intellectual property rights</li>
              <li>Circumvent security controls</li>
            </ul>
            <p className="text-body mb-8 font-semibold">Violation may result in immediate account termination.</p>

            <h2 className="text-h3 mb-4">14. INTELLECTUAL PROPERTY</h2>
            <p className="text-body mb-4">All Platform intellectual property including: Software, Design, Branding, User interface, Databases, and Documentation remains the exclusive property of the Company or its licensors.</p>
            <p className="text-body mb-8">No ownership rights are transferred to users.</p>

            <h2 className="text-h3 mb-4">15. FEES AND PAYMENTS</h2>
            <p className="text-body mb-4">Where applicable: Subscription fees, Platform fees, Premium features, and Service charges shall be communicated separately.</p>
            <p className="text-body mb-8">All fees are non-refundable unless otherwise stated in writing. Future commercial services may be subject to additional agreements.</p>

            <h2 className="text-h3 mb-4">16. THIRD-PARTY SERVICES</h2>
            <p className="text-body mb-4">The Platform may integrate with: Cloud providers, Email providers, Communication services, and Analytics tools.</p>
            <p className="text-body mb-8">The Company is not responsible for third-party service interruptions.</p>

            <h2 className="text-h3 mb-4">17. AVAILABILITY OF SERVICE</h2>
            <p className="text-body mb-4">The Company aims to maintain service availability but does not guarantee uninterrupted operation.</p>
            <p className="text-body mb-8">The Platform may experience: Maintenance periods, Updates, Downtime, and Technical failures without liability.</p>

            <h2 className="text-h3 mb-4">18. DISCLAIMER OF WARRANTIES</h2>
            <p className="text-body mb-4">The Platform is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
            <p className="text-body mb-8">The Company makes no warranty regarding: Accuracy, Completeness, Reliability, Suitability, Availability, and Performance of the Platform.</p>

            <h2 className="text-h3 mb-4">19. LIMITATION OF LIABILITY</h2>
            <p className="text-body mb-4">To the maximum extent permitted by law, the Company shall not be liable for:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Construction defects</li>
              <li>Project delays</li>
              <li>Cost overruns</li>
              <li>Supplier disputes</li>
              <li>Procurement losses</li>
              <li>Loss of profits</li>
              <li>Business interruption</li>
              <li>Data loss</li>
              <li>Indirect damages</li>
              <li>Consequential damages</li>
            </ul>
            <p className="text-body mb-8 font-semibold">The Company's aggregate liability shall not exceed the fees paid to the Company during the preceding twelve (12) months.</p>

            <h2 className="text-h3 mb-4">20. INDEMNITY</h2>
            <p className="text-body mb-8">Users agree to indemnify and hold harmless the Company from claims arising from: User content, Project decisions, Procurement decisions, Supplier relationships, Regulatory violations, and Breach of these Terms.</p>

            <h2 className="text-h3 mb-4">21. DATA PROTECTION</h2>
            <p className="text-body mb-8">Use of personal information is governed by the Privacy Policy available on the Platform. Users agree to the collection and processing of information as described therein.</p>

            <h2 className="text-h3 mb-4">22. TERMINATION</h2>
            <p className="text-body mb-4">The Company may suspend or terminate access at any time where: Terms are violated, Fraud is suspected, Security concerns arise, or Legal obligations require action.</p>
            <p className="text-body mb-8">Termination does not relieve users of prior obligations.</p>

            <h2 className="text-h3 mb-4">23. GOVERNING LAW</h2>
            <p className="text-body mb-4">These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.</p>
            <p className="text-body mb-8">Any dispute shall be subject to the exclusive jurisdiction of the competent courts of Sharjah, UAE, unless otherwise required by applicable law.</p>

            <h2 className="text-h3 mb-4">24. MODIFICATIONS</h2>
            <p className="text-body mb-8">The Company may amend these Terms at any time. Updated versions will be posted on the Platform. Continued use constitutes acceptance of the revised Terms.</p>

            <h2 className="text-h3 mb-4">25. CONTACT INFORMATION</h2>
            <ul className="text-body mb-8 list-none">
              <li><strong>Company:</strong> [COMPANY NAME]</li>
              <li><strong>Email:</strong> [EMAIL]</li>
              <li><strong>Address:</strong> [REGISTERED ADDRESS]</li>
              <li><strong>Website:</strong> [WEBSITE URL]</li>
            </ul>

            <div className="bg-surface p-6 rounded-lg border border-white/10 mt-12 mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '3rem' }}>
              <h3 className="text-h4 mb-4 text-warning" style={{ color: '#fbbf24' }}>UAE LEGAL REVIEW NOTICE</h3>
              <p className="text-body text-sm mb-0">
                This document should be reviewed by UAE Legal Counsel, Technology Lawyer, Data Protection Advisor, or Corporate Compliance Consultant before public publication and commercial use.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
