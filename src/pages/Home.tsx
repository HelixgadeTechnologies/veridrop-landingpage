import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { setIsModalOpen } = useOutletContext<{ setIsModalOpen: (val: boolean) => void }>();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-5');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });
    
    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar?.classList.add('shadow-md');
      } else {
        navbar?.classList.remove('shadow-md');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-20 min-h-[90vh] flex items-center overflow-hidden relative" style={{background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.05) 0%, rgba(255,255,255,0) 50%)'}}>
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-accent-light text-accent-hover rounded-full text-sm font-semibold mb-6">
              Next-Gen Escrow & Logistics
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">Shop Online Without the Fear.</h1>
            <p className="text-xl text-slate-500 mb-10 max-w-lg">
              The ultimate trust-centric platform. We combine secure escrow payments with on-demand physical inspection to eliminate e-commerce fraud completely.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn btn-primary btn-large">I'm a Buyer</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn btn-secondary btn-large">For Vendors/Business</a>
            </div>
            <div className="flex gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Bank-grade Security
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                100% Guaranteed
              </div>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-in-up delay-200">
            <div className="glass-panel rounded-[32px] p-4 max-w-[320px] relative">
              <img src="/images/hero_mockup.png" alt="Veridrop App Transaction Complete" className="rounded-[20px] w-full block" />
              <div className="absolute -bottom-5 -left-10 bg-white p-4 md:px-6 rounded-2xl shadow-lg flex items-center gap-4 animate-float">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">✓</div>
                <div className="flex flex-col">
                  <strong className="text-primary-dark text-base">Funds Released</strong>
                  <span className="text-slate-500 text-sm">Inspection Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Trust Gap Section */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom animate-on-scroll">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl mb-4">The "What I Ordered vs. What I Got" Dilemma</h2>
            <p className="text-lg text-slate-500">Online shopping shouldn't feel like a gamble. Scams, fake products, and lost funds plague peer-to-peer and independent e-commerce.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[24px] border border-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-danger-light flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" className="w-7 h-7"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </div>
              <h3 className="text-2xl mb-4">Fake or Damaged Goods</h3>
              <p className="text-slate-500">Sellers ship empty boxes or counterfeit items, leaving you to fight for a refund.</p>
            </div>
            <div className="bg-white p-10 rounded-[24px] border border-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-danger-light flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" className="w-7 h-7"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-2xl mb-4">Unsecured Payments</h3>
              <p className="text-slate-500">Sending money upfront is risky. Bank transfers and P2P apps offer zero buyer protection.</p>
            </div>
            <div className="bg-white p-10 rounded-[24px] border border-accent-light shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-accent-light/30 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                </div>
                <h3 className="text-2xl mb-4">The Veridrop Way</h3>
                <p className="text-slate-500">Complete peace of mind. We hold the money, verify the item, and only then release funds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Veridrop Solution */}
      <section id="how-it-works" className="py-24">
        <div className="container-custom animate-on-scroll">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl mb-4">How Veridrop Protects You</h2>
            <p className="text-lg text-slate-500">A seamless, transparent process designed to build trust between strangers.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
            {/* Step 1 */}
            <div className="bg-bg-light border border-black/5 rounded-[32px] p-10 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="font-display text-2xl font-extrabold text-accent mb-4">01</div>
                <h3 className="text-3xl mb-4">Secure Escrow</h3>
                <p className="text-slate-500 mb-8 max-w-[400px]">Money is locked safely in our vault. The seller knows you have the funds, but they can't access them yet.</p>
              </div>
              <div className="flex items-center justify-center gap-4 bg-white p-6 rounded-2xl shadow-sm z-10 mt-6 relative border border-slate-100">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center text-accent">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div className="font-display text-2xl font-bold text-primary-dark">$1,450.00 Locked</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-bg-light border border-black/5 rounded-[32px] p-10 relative overflow-hidden lg:col-span-2 min-h-[400px]">
              <div className="relative z-10 max-w-[45%]">
                <div className="font-display text-2xl font-extrabold text-accent mb-4">02</div>
                <h3 className="text-3xl mb-4">Physical Inspection</h3>
                <p className="text-slate-500">Our logistics agents intercept and verify the item live. We ensure it matches the description before it ever reaches you.</p>
              </div>
              <div className="absolute -right-5 -bottom-5 w-[65%] h-[110%] z-0">
                 <img src="/images/inspection_agent.png" alt="Veridrop Agent Inspecting Package" className="w-full h-full object-cover rounded-tl-[32px] shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)]" />
                 <div className="absolute top-8 left-8 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-danger rounded-full animate-pulse-danger"></span> Live Verification
                 </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-bg-light border border-black/5 rounded-[32px] p-10 lg:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="max-w-[60%]">
                  <div className="font-display text-2xl font-extrabold text-accent mb-4">03</div>
                  <h3 className="text-3xl mb-4">Delivery & Release</h3>
                  <p className="text-slate-500">You receive the verified item. Only when you are 100% satisfied do we release the funds to the seller.</p>
                </div>
                <div>
                  <button className="btn btn-primary btn-large animate-pulse-primary">Approve & Release Funds</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section id="features" className="py-24 bg-primary-dark text-white">
        <div className="container-custom animate-on-scroll">
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl mb-4 text-white">Uncompromising Standards</h2>
            <p className="text-lg text-white/70">Built for high-value transactions and absolute certainty.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-accent"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h4 className="text-xl mb-4 text-white">On-Demand Verification</h4>
              <p className="text-white/70">Trained professionals assess item condition, authenticity, and operability before final delivery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-accent"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h4 className="text-xl mb-4 text-white">Fraud-Proof Escrow</h4>
              <p className="text-white/70">Licensed, compliant escrow services ensure your money is untouchable until the transaction is successfully completed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h4 className="text-xl mb-4 text-white">Tamper-Proof Chain</h4>
              <p className="text-white/70">From pickup to drop-off, every step is tracked, recorded, and guaranteed by our comprehensive insurance policy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white to-bg-light">
        <div className="container-custom animate-on-scroll">
          <div className="glass-panel-dark">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none" style={{background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(11, 19, 43, 0) 50%)'}}></div>
            <h2 className="text-5xl mb-6 relative z-10 text-white">Ready to trade with confidence?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">Join thousands of buyers and sellers who trust Veridrop for their most important transactions.</p>
            <div className="flex justify-center gap-4 flex-wrap relative z-10">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn btn-primary btn-large">Create Free Account</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn btn-outline btn-large">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
