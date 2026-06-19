import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="navbar fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md z-50 border-b border-black/5 transition-shadow duration-300">
        <div className="container-custom h-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 font-display font-extrabold text-2xl text-primary-dark">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#10B981"/>
              <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#0B132B"/>
            </svg>
            <span>Veridrop</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <a href="/#how-it-works" className="font-medium text-slate-500 hover:text-primary-dark transition-colors">How it Works</a>
            <a href="/#features" className="font-medium text-slate-500 hover:text-primary-dark transition-colors">Features</a>
            <a href="/#business" className="font-medium text-slate-500 hover:text-primary-dark transition-colors">For Business</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn btn-ghost">Log In</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <Outlet context={{ setIsModalOpen }} />
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-6 border-t border-black/5 mt-auto">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 font-display font-extrabold text-2xl text-primary-dark mb-4">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#10B981"/>
                  <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#0B132B"/>
                </svg>
                <span>Veridrop</span>
              </Link>
              <p className="text-slate-500 max-w-[250px]">Secure logistics & escrow for the modern web.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg mb-5 text-primary-dark">Product</h4>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-slate-500 hover:text-accent">Escrow</a>
                  <a href="#" className="text-slate-500 hover:text-accent">Logistics</a>
                  <a href="#" className="text-slate-500 hover:text-accent">For Business</a>
                </div>
              </div>
              <div>
                <h4 className="text-lg mb-5 text-primary-dark">Company</h4>
                <div className="flex flex-col gap-3">
                  <Link to="/about" className="text-slate-500 hover:text-accent">About</Link>
                  <a href="#" className="text-slate-500 hover:text-accent">Careers</a>
                  <Link to="/contact" className="text-slate-500 hover:text-accent">Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="text-lg mb-5 text-primary-dark">Legal</h4>
                <div className="flex flex-col gap-3">
                  <Link to="/privacy" className="text-slate-500 hover:text-accent">Privacy</Link>
                  <Link to="/terms" className="text-slate-500 hover:text-accent">Terms</Link>
                  <a href="#" className="text-slate-500 hover:text-accent">Licenses</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm pt-6 border-t border-black/5">
            <p>&copy; 2026 Veridrop Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[24px] p-8 max-w-sm w-full text-center shadow-2xl animate-fade-in-up relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-primary-dark transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="w-16 h-16 bg-accent-light text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 className="text-2xl mb-2">Coming Soon!</h3>
            <p className="text-slate-500 mb-8">We're working hard to launch Veridrop. Check back soon or join our waitlist.</p>
            <button onClick={() => setIsModalOpen(false)} className="btn btn-primary w-full">Got it</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
