import { useOutletContext } from 'react-router-dom';

const Contact = () => {
  const { setIsModalOpen } = useOutletContext<{ setIsModalOpen: (val: boolean) => void }>();

  return (
    <div className="py-20 bg-bg-light min-h-[80vh]">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-accent-light text-accent-hover rounded-full text-sm font-semibold mb-6">
            Get in Touch
          </div>
          <h1 className="text-5xl mb-6">Contact Veridrop Sales & Support</h1>
          <p className="text-xl text-slate-500">We're here to help you trade with complete confidence. Let us know how we can assist you.</p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[32px] shadow-sm bg-white animate-fade-in-up delay-200">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="font-semibold text-primary-dark">First Name</label>
              <input type="text" id="firstName" className="px-4 py-3 rounded-xl border border-black/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light transition-all" placeholder="Jane" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="font-semibold text-primary-dark">Last Name</label>
              <input type="text" id="lastName" className="px-4 py-3 rounded-xl border border-black/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light transition-all" placeholder="Doe" required />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="email" className="font-semibold text-primary-dark">Work Email</label>
              <input type="email" id="email" className="px-4 py-3 rounded-xl border border-black/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light transition-all" placeholder="jane@company.com" required />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="reason" className="font-semibold text-primary-dark">How can we help?</label>
              <select id="reason" className="px-4 py-3 rounded-xl border border-black/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light transition-all bg-white" required>
                <option value="">Select a reason...</option>
                <option value="sales">Sales Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="font-semibold text-primary-dark">Message</label>
              <textarea id="message" rows={5} className="px-4 py-3 rounded-xl border border-black/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-light transition-all resize-none" placeholder="Tell us more about your needs..." required></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button type="submit" className="btn btn-primary w-full text-lg py-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
