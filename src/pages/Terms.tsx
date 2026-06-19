const Terms = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl text-primary-dark mb-4">Terms of Service</h1>
          <p className="text-slate-500">Last updated: June 19, 2026</p>
        </div>

        <div className="prose prose-lg text-slate-600 max-w-none animate-fade-in-up delay-200 space-y-8">
          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Veridrop platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">2. Escrow Services</h2>
            <p>
              Veridrop acts as a neutral third party to hold funds during a transaction. Funds are only released when both the buyer and seller fulfill their obligations, specifically post physical inspection and buyer approval.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">3. Physical Inspection Policy</h2>
            <p>
              Our agents inspect items based on the agreed-upon description between the buyer and seller. While we strive for absolute accuracy, Veridrop's liability is limited to obvious physical discrepancies. We do not provide specialized appraisals or authenticate highly technical internal components unless explicitly stated in a premium service tier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">4. User Responsibilities</h2>
            <p>
              Users must provide accurate descriptions of items. Sellers attempting to ship fraudulent, illegal, or prohibited items will have their accounts terminated and may be reported to relevant authorities. Buyers must make funds available in escrow before an agent is dispatched.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">5. Dispute Resolution</h2>
            <p>
              In the event of a dispute, Veridrop holds the final authority based on the findings of our logistics agents. If an item is rejected during inspection, it is returned to the seller, and the funds are refunded to the buyer minus the inspection service fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">6. Limitation of Liability</h2>
            <p>
              Veridrop is not liable for indirect, incidental, or consequential damages arising from the use of our platform. Our maximum liability in any transaction is strictly limited to the funds held in escrow.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
