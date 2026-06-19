const Privacy = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl text-primary-dark mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: June 19, 2026</p>
        </div>

        <div className="prose prose-lg text-slate-600 max-w-none animate-fade-in-up delay-200 space-y-8">
          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">1. Information We Collect</h2>
            <p>
              At Veridrop, your privacy and security are our highest priorities. We collect information necessary to facilitate secure escrow transactions and physical logistics services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contact details (name, email, phone number).</li>
              <li>Financial and payment information required for escrow services.</li>
              <li>Shipping and delivery addresses.</li>
              <li>Transaction history and communication records within our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">2. How We Use Your Information</h2>
            <p>
              We use your data strictly to execute the services you request, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Processing payments securely via our licensed escrow partners.</li>
              <li>Dispatching logistics agents for physical item verification.</li>
              <li>Providing customer support and dispute resolution.</li>
              <li>Preventing fraud, scams, and abuse of our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">3. Data Security</h2>
            <p>
              We employ bank-grade security measures, including end-to-end encryption, regular security audits, and strict access controls. Your financial information is never stored in plain text and is handled exclusively by compliant payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">4. Sharing of Information</h2>
            <p>
              Veridrop does not sell your personal data. We only share information with verified third-party partners (e.g., payment processors, delivery agents) strictly for the purpose of completing your transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-primary-dark font-display mb-4">5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you have the right to access, correct, or request the deletion of your personal data. To exercise these rights, please contact our support team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
