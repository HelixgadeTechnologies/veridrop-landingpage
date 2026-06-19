const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-accent-light text-accent-hover rounded-full text-sm font-semibold mb-6">
            Our Mission
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 text-primary-dark">Eliminating E-commerce Fraud</h1>
          <p className="text-xl text-slate-500">Veridrop was founded on a simple principle: online transactions should not require blind trust.</p>
        </div>

        <div className="prose prose-lg text-slate-600 max-w-none animate-fade-in-up delay-200">
          <h2 className="text-3xl text-primary-dark font-display mb-4">The Problem with Peer-to-Peer Marketplaces</h2>
          <p className="mb-8">
            Every day, thousands of buyers lose money to sophisticated scams, while honest sellers struggle to prove their legitimacy. The traditional "send the money and hope for the best" approach is broken. We saw a gap where neither bank transfers nor basic P2P apps provided adequate protection.
          </p>

          <h2 className="text-3xl text-primary-dark font-display mb-4">Our Solution</h2>
          <p className="mb-8">
            Veridrop introduces the ultimate fail-safe: physical, on-demand inspection coupled with ironclad escrow. We do not just hold your money; we intercept the package and verify its contents. Our highly trained logistics agents act as an impartial third party, ensuring that what you ordered is exactly what you get.
          </p>

          <div className="bg-bg-light rounded-[32px] p-8 border border-black/5 mb-8">
            <h3 className="text-2xl text-primary-dark mb-4">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">✓</div>
                <span><strong>Absolute Transparency:</strong> No hidden fees. No opaque processes. You know exactly where your money and package are at all times.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">✓</div>
                <span><strong>Unwavering Security:</strong> Bank-grade encryption and compliant escrow practices safeguard your funds.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">✓</div>
                <span><strong>Human Verification:</strong> Technology is great, but physical verification requires a human touch. Our agents are our strongest asset.</span>
              </li>
            </ul>
          </div>
          
          <p className="text-lg font-medium text-primary-dark text-center">
            Join us in building a future where you can shop online without the fear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
