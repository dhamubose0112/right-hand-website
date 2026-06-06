import React from 'react';

const Privacy = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center" style={{ padding: '6rem 0 4rem' }}>
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-h1 text-white mb-4">Privacy Policy</h1>
          <p className="text-body-lg text-white opacity-80">Effective Date: [DATE]<br />Last Updated: [DATE]</p>
        </div>
      </div>
      
      <section className="section bg-canvas">
        <div className="container max-w-4xl mx-auto premium-card">
          <div className="prose text-left">
            
            <h2 className="text-h3 mb-4">1. INTRODUCTION</h2>
            <p className="text-body mb-4">Welcome to [COMPANY NAME] ("Company", "we", "our", or "us").</p>
            <p className="text-body mb-4">This Privacy Policy explains how we collect, use, process, store, disclose, and protect personal information when you access or use our website, software platform, products, services, and related applications (collectively, the "Platform").</p>
            <p className="text-body mb-4">The Platform is a web-based Residential Construction Supervision and RFQ Procurement Platform designed to facilitate project supervision, milestone tracking, supplier engagement, procurement workflows, communication, and project management activities.</p>
            <p className="text-body mb-8">By accessing or using the Platform, you acknowledge that you have read and understood this Privacy Policy.</p>

            <h2 className="text-h3 mb-4">2. COMPANY INFORMATION</h2>
            <ul className="text-body mb-8 list-disc pl-5">
              <li><strong>Company Name:</strong> [COMPANY NAME]</li>
              <li><strong>Legal Entity Type:</strong> [LLC/FZC/FZE/OTHER]</li>
              <li><strong>Jurisdiction:</strong> Sharjah, United Arab Emirates</li>
              <li><strong>Registered Address:</strong> [REGISTERED ADDRESS]</li>
              <li><strong>Website:</strong> [WEBSITE URL]</li>
              <li><strong>Privacy Email:</strong> [PRIVACY EMAIL]</li>
              <li><strong>Privacy Officer:</strong> [NAME]</li>
              <li><strong>Telephone:</strong> [PHONE]</li>
            </ul>

            <h2 className="text-h3 mb-4">3. APPLICABLE LAWS</h2>
            <p className="text-body mb-4">This Privacy Policy is intended to align with applicable laws and regulations, including where applicable:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection (PDPL)</li>
              <li>UAE Cybercrime Laws</li>
              <li>UAE Consumer Protection Regulations</li>
              <li>UAE Electronic Transactions Framework</li>
              <li>Applicable GCC regulations</li>
              <li>International privacy principles where commercially appropriate</li>
            </ul>
            <p className="text-body mb-8 text-sm opacity-80 italic">Legal Review Required: Jurisdiction-specific compliance obligations should be reviewed by qualified UAE legal counsel before publication.</p>

            <h2 className="text-h3 mb-4">4. WHO THIS POLICY APPLIES TO</h2>
            <p className="text-body mb-4">This Privacy Policy applies to:</p>
            <div className="grid grid-cols-2 gap-2 mb-8">
              <ul className="text-body list-disc pl-5">
                <li>Home Owners</li>
                <li>Project Managers</li>
                <li>Construction Consultants</li>
                <li>Suppliers</li>
                <li>Contractors</li>
                <li>Subcontractors</li>
              </ul>
              <ul className="text-body list-disc pl-5">
                <li>Platform Administrators</li>
                <li>Website Visitors</li>
                <li>Demo Request Users</li>
                <li>Prospective Customers</li>
                <li>Business Partners</li>
                <li>Vendors</li>
              </ul>
            </div>

            <h2 className="text-h3 mb-4">5. INFORMATION WE COLLECT</h2>
            <h3 className="text-h4 mb-2">5.1 Personal Information</h3>
            <p className="text-body mb-2">We may collect:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Full name, Email address, Mobile number</li>
              <li>Company name, Job title, Country</li>
              <li>User role, Profile information, Authentication credentials</li>
            </ul>
            
            <h3 className="text-h4 mb-2">5.2 Business Information</h3>
            <p className="text-body mb-2">We may collect:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Company details, Supplier information, Vendor records</li>
              <li>Project-related information, Procurement records</li>
            </ul>

            <h3 className="text-h4 mb-2">5.3 Project Information</h3>
            <p className="text-body mb-2">We may collect:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Project names, descriptions, locations</li>
              <li>Milestone records, RFQ information, Material requirements</li>
              <li>Supplier quotations, Approval history</li>
            </ul>

            <h3 className="text-h4 mb-2">5.4 Uploaded Content</h3>
            <p className="text-body mb-2">Users may upload:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Photos, Videos, Documents, Drawings, PDFs</li>
              <li>Site progress reports, Construction records</li>
            </ul>

            <h3 className="text-h4 mb-2">5.5 Communication Information</h3>
            <p className="text-body mb-2">We may collect:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>Chat messages, Comments, Support tickets</li>
              <li>Email correspondence, Notification history, Project communications</li>
            </ul>

            <h3 className="text-h4 mb-2">5.6 Technical Information</h3>
            <p className="text-body mb-2">We may collect:</p>
            <ul className="text-body mb-8 list-disc pl-5">
              <li>IP address, Browser information, Device information</li>
              <li>Operating system details, Session logs, Usage analytics, Access logs</li>
            </ul>

            <h2 className="text-h3 mb-4">6. PURPOSES OF PROCESSING</h2>
            <p className="text-body mb-4">We may use information for the following purposes:</p>
            <ul className="text-body mb-8 list-disc pl-5">
              <li>Creating user accounts, Authenticating users</li>
              <li>Managing projects, Facilitating construction supervision</li>
              <li>Managing milestone approvals, Supporting RFQ workflows</li>
              <li>Enabling supplier participation, Delivering notifications</li>
              <li>Improving platform performance, Customer support</li>
              <li>Fraud prevention, Security monitoring</li>
              <li>Compliance obligations, Internal reporting and analytics</li>
              <li>Service enhancement</li>
            </ul>

            <h2 className="text-h3 mb-4">7. LEGAL BASIS FOR PROCESSING</h2>
            <p className="text-body mb-4">Where applicable, processing may be based on:</p>
            <ul className="text-body mb-8 list-disc pl-5">
              <li>User consent</li>
              <li>Contractual necessity</li>
              <li>Legitimate business interests</li>
              <li>Legal obligations</li>
              <li>Security requirements</li>
              <li>Fraud prevention</li>
              <li>Service improvement</li>
            </ul>

            <h2 className="text-h3 mb-4">8. DATA SHARING AND DISCLOSURE</h2>
            <h3 className="text-h4 mb-2">We may share information with:</h3>
            <ul className="text-body mb-4 list-disc pl-5">
              <li><strong>Platform Participants:</strong> Home Owners, Project Managers, Suppliers, Contractors, Consultants</li>
              <li><strong>Service Providers:</strong> Cloud hosting providers, Infrastructure providers, Email service providers, Analytics providers, Technology vendors, Professional advisors</li>
              <li><strong>Regulatory Authorities</strong></li>
            </ul>
            <p className="text-body mb-4">Where legally required, information may be disclosed to Government authorities, Regulatory bodies, Courts, Law enforcement agencies.</p>
            <p className="text-body mb-8 font-semibold">We do not sell personal information to third parties.</p>

            <h2 className="text-h3 mb-4">9. CHAT AND COMMUNICATION DATA</h2>
            <p className="text-body mb-4">The Platform may provide communication tools including Owner ↔ Project Manager messaging, Supplier ↔ Project Manager messaging, Project discussions, and RFQ communications.</p>
            <p className="text-body mb-8">Users acknowledge that communications may be stored, monitored, archived, and reviewed for Platform operations, Customer support, Audit requirements, Compliance obligations, and Dispute resolution.</p>

            <h2 className="text-h3 mb-4">10. FILES, EVIDENCE AND DOCUMENT UPLOADS</h2>
            <p className="text-body mb-4">Users may upload project-related content. Users retain ownership of their content.</p>
            <p className="text-body mb-4">By uploading content, users grant the Company a non-exclusive license to Store content, Process content, Display content to authorized users, Back up content, and Operate the Platform.</p>
            <p className="text-body mb-8">The Company does not claim ownership of uploaded materials.</p>

            <h2 className="text-h3 mb-4">11. COOKIES AND TRACKING TECHNOLOGIES</h2>
            <p className="text-body mb-4">We may use:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li><strong>Essential Cookies:</strong> Required for operation of the Platform.</li>
              <li><strong>Analytics Cookies:</strong> Used to understand platform usage.</li>
              <li><strong>Performance Cookies:</strong> Used to improve system performance.</li>
              <li><strong>Security Cookies:</strong> Used for fraud detection and platform security.</li>
            </ul>
            <p className="text-body mb-8">Users may manage cookies through browser settings.</p>

            <h2 className="text-h3 mb-4">12. INTERNATIONAL DATA TRANSFERS</h2>
            <p className="text-body mb-4">Information may be processed or stored in jurisdictions outside the UAE through Cloud hosting providers, Infrastructure partners, and Service providers.</p>
            <p className="text-body mb-8">Where transfers occur, reasonable safeguards will be implemented.</p>

            <h2 className="text-h3 mb-4">13. DATA RETENTION</h2>
            <p className="text-body mb-4">We retain information only as long as necessary for business, legal, operational, or regulatory purposes.</p>
            <p className="text-body mb-4">Records may include: User accounts, Project records, RFQ records, Quotations, Communications, Uploaded files, Audit logs.</p>
            <p className="text-body mb-8">Retention periods may vary depending on applicable requirements.</p>

            <h2 className="text-h3 mb-4">14. DATA SECURITY</h2>
            <p className="text-body mb-4">We implement reasonable technical and organizational measures including Encryption, Secure hosting, Role-based access controls, Authentication mechanisms, Monitoring systems, Backup procedures, and Disaster recovery measures.</p>
            <p className="text-body mb-8">However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>

            <h2 className="text-h3 mb-4">15. USER RIGHTS</h2>
            <p className="text-body mb-4">Subject to applicable law, users may have the right to Access personal information, Correct inaccurate information, Request deletion, Withdraw consent, Restrict processing, Request data portability where applicable, and Submit complaints.</p>
            <p className="text-body mb-8">Requests may be submitted to Email: [PRIVACY EMAIL]</p>

            <h2 className="text-h3 mb-4">16. CHILDREN'S PRIVACY</h2>
            <p className="text-body mb-4">The Platform is not intended for individuals under the age of 18.</p>
            <p className="text-body mb-8">We do not knowingly collect personal information from minors.</p>

            <h2 className="text-h3 mb-4">17. THIRD-PARTY LINKS</h2>
            <p className="text-body mb-4">The Platform may contain links to external websites.</p>
            <p className="text-body mb-8">We are not responsible for the privacy practices or content of third-party websites. Users should review third-party privacy policies independently.</p>

            <h2 className="text-h3 mb-4">18. INTELLECTUAL PROPERTY AND USER CONTENT</h2>
            <p className="text-body mb-4">Users retain ownership of content submitted through the Platform.</p>
            <p className="text-body mb-4">The Company receives the limited rights necessary to Host content, Display content, Process content, and Operate platform functionality.</p>
            <p className="text-body mb-8">Users are responsible for ensuring they have rights to upload submitted content.</p>

            <h2 className="text-h3 mb-4">19. LIABILITY LIMITATIONS</h2>
            <p className="text-body mb-4">To the fullest extent permitted by law:</p>
            <ul className="text-body mb-4 list-disc pl-5">
              <li>We do not guarantee uninterrupted service.</li>
              <li>We are not responsible for third-party actions.</li>
              <li>We are not liable for unauthorized access beyond reasonable control.</li>
              <li>Internet transmissions may not be completely secure.</li>
            </ul>
            <p className="text-body mb-8">Nothing in this section limits rights that cannot legally be excluded under applicable law.</p>

            <h2 className="text-h3 mb-4">20. POLICY CHANGES</h2>
            <p className="text-body mb-8">We reserve the right to update this Privacy Policy at any time. Updated versions will be posted on the Platform with a revised effective date. Continued use of the Platform constitutes acceptance of the updated Privacy Policy.</p>

            <h2 className="text-h3 mb-4">21. CONTACT US</h2>
            <ul className="text-body mb-8 list-none">
              <li><strong>Privacy Officer:</strong> [NAME]</li>
              <li><strong>Company:</strong> [COMPANY NAME]</li>
              <li><strong>Email:</strong> [PRIVACY EMAIL]</li>
              <li><strong>Telephone:</strong> [PHONE]</li>
              <li><strong>Address:</strong> [REGISTERED ADDRESS]</li>
            </ul>

            <div className="bg-surface p-6 rounded-lg border border-white/10 mt-12 mb-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '3rem' }}>
              <h3 className="text-h4 mb-4 text-warning" style={{ color: '#fbbf24' }}>UAE LEGAL REVIEW NOTICE</h3>
              <p className="text-body text-sm mb-0">
                Certain provisions may require review by UAE Legal Counsel, Data Privacy Advisor, Compliance Consultant, Corporate Secretary, or Regulatory Specialist before publication or implementation.
              </p>
            </div>

            <div className="mt-12 pt-8 text-sm opacity-70" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '2rem' }}>
              <h4 className="font-bold mb-2">Consent Notices:</h4>
              <p className="mb-2"><strong>Footer Privacy Notice (short version):</strong> "We respect your privacy. Personal information collected through this website and platform is processed in accordance with our Privacy Policy and applicable UAE data protection laws. By using our services, you agree to such processing."</p>
              <p className="mb-2"><strong>Registration Form Consent:</strong> "By creating an account, I acknowledge that I have read and agree to the Privacy Policy and consent to the collection, processing, storage, and use of my information for platform operations and related services."</p>
              <p className="mb-2"><strong>Demo Request Consent:</strong> "By submitting this form, I consent to being contacted regarding my enquiry and agree to the processing of my information in accordance with the Privacy Policy."</p>
              <p><strong>Supplier Registration Consent:</strong> "By registering as a supplier, I consent to the collection and processing of my business and personal information for RFQ participation, platform administration, compliance, and communication purposes."</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
