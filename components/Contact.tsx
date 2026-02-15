
import React from 'react';
import { USER_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappURL = `https://wa.me/919022604252?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
  };
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c]">
      <div className="container mx-auto px-6">
        <div className="glass-morphism rounded-[3rem] p-12 overflow-hidden relative group/section">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -z-10 transition-all duration-1000 group-hover/section:scale-150 group-hover/section:bg-blue-500/20"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl font-extrabold leading-tight">Ready to start a <span className="gradient-text">Project?</span></h2>
              <p className="text-slate-400 text-lg">Whether you have a job opening or a freelance project, I'm here to bring your vision to life. Let's build something extraordinary together.</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all group-hover/item:bg-blue-600 group-hover/item:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/item:text-white transition-colors text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest group-hover/item:text-blue-400 transition-colors">Email Me</p>
                    <p className="text-lg font-medium group-hover/item:translate-x-1 transition-transform">{USER_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group/item cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all group-hover/item:bg-purple-600 group-hover/item:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/item:text-white transition-colors text-purple-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest group-hover/item:text-purple-400 transition-colors">Call Me</p>
                    <p className="text-lg font-medium group-hover/item:translate-x-1 transition-transform">{USER_INFO.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input name="firstName" type="text" placeholder="First Name" required className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all w-full" />
                <input name="lastName" type="text" placeholder="Last Name" required className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all w-full" />
              </div>
              <input name="email" type="email" placeholder="Email Address" required className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all w-full" />
              <textarea name="message" placeholder="Tell me about your project..." rows={5} required className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all w-full resize-none"></textarea>
              <button type="submit" className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
