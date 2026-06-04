import React from 'react';

const Privacy = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center" style={{ padding: '6rem 0 4rem' }}>
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-h1 text-white mb-4">Privacy Policy</h1>
          <p className="text-body-lg text-white opacity-80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <section className="section bg-canvas">
        <div className="container max-w-3xl mx-auto premium-card">
          <div className="prose">
            <h2 className="text-h3 mb-4">1. Information We Collect</h2>
            <p className="text-body mb-6">We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
            
            <h2 className="text-h3 mb-4">2. Use of Information</h2>
            <p className="text-body mb-6">We may use the information we collect about you to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users, develop safety features, authenticate users, and send product updates and administrative messages.</p>
            
            <h2 className="text-h3 mb-4">3. Sharing of Information</h2>
            <p className="text-body mb-6">We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including with vendors, consultants, marketing partners, and other service providers who need access to such information to carry out work on our behalf.</p>
            
            <h2 className="text-h3 mb-4">4. Security</h2>
            <p className="text-body mb-6">Right Hand takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
            
            <h2 className="text-h3 mb-4">5. Contact Us</h2>
            <p className="text-body">If you have any questions about this Privacy Statement, please contact us at privacy@righthand.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
