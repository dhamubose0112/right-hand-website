import React from 'react';

const Terms = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="page-header text-center" style={{ padding: '6rem 0 4rem' }}>
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-h1 text-white mb-4">Terms & Conditions</h1>
          <p className="text-body-lg text-white opacity-80">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <section className="section bg-canvas">
        <div className="container max-w-3xl mx-auto premium-card">
          <div className="prose">
            <h2 className="text-h3 mb-4">1. Acceptance of Terms</h2>
            <p className="text-body mb-6">By accessing or using the Right Hand platform, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            
            <h2 className="text-h3 mb-4">2. Description of Service</h2>
            <p className="text-body mb-6">Right Hand is a SaaS platform providing residential construction supervision and RFQ procurement tools for stakeholders, including home owners, project managers, and suppliers.</p>
            
            <h2 className="text-h3 mb-4">3. User Accounts</h2>
            <p className="text-body mb-6">When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            
            <h2 className="text-h3 mb-4">4. Intellectual Property</h2>
            <p className="text-body mb-6">The Service and its original content, features, and functionality are and will remain the exclusive property of Right Hand and its licensors. The Service is protected by copyright, trademark, and other laws of both the United Arab Emirates and foreign countries.</p>
            
            <h2 className="text-h3 mb-4">5. Contact Us</h2>
            <p className="text-body">If you have any questions about these Terms, please contact us at legal@righthand.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
