
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import PortfolioGrid from './components/PortfolioGrid';
import Contact from './components/Contact';
import AIChatAssistant from './components/AIChatAssistant';
import { USER_INFO } from './constants';

const App: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  return (
    <div className="relative min-h-screen">
      <Navbar onServicesClick={() => setShowServices(true)} />
      
      {/* Services Modal */}
      {showServices && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen py-20">
            <button 
              onClick={() => setShowServices(false)}
              className="fixed top-8 right-8 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:scale-110 z-[101]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <Services />
          </div>
        </div>
      )}
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <span className="h-px w-12 bg-cyan-500"></span>
                  <h2 className="text-xs font-mono font-bold tracking-[0.3em] text-cyan-500 uppercase">System Overview</h2>
                </div>
                <h2 className="text-4xl font-bold font-mono tracking-tight leading-snug">Scaling Reliability through <span className="text-emerald-500">Code & Automation.</span></h2>
                <div className="space-y-6 font-mono text-sm text-slate-400 leading-relaxed border-l-2 border-white/5 pl-6">
                  <p>
                    I am Mahesh Shelke, a Cloud & DevOps enthusiast completing my BCA in 2025. With 13 production-ready projects spanning AWS, Terraform, Ansible, Jenkins, Docker, and Kubernetes, I specialize in building scalable, automated infrastructure that eliminates manual toil.
                  </p>
                  <p>
                    From deploying 3-tier architectures with VPC isolation to creating serverless automation systems, I architect solutions that prioritize reliability, security, and cost optimization. My portfolio includes real-world applications serving 2000+ users with 99.5% uptime.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] -z-10"></div>
                {[
                  { label: "PROJECTS", value: "13" },
                  { label: "AWS_READY", value: "TRUE" },
                  { label: "GRAD_YEAR", value: "2025" },
                  { label: "UPTIME", value: "99.5%" }
                ].map(stat => (
                  <div key={stat.label} className="cyber-border p-8 bg-black/40 text-center group hover:border-cyan-500/50 transition-all">
                    <p className="text-3xl font-extrabold font-mono text-white group-hover:text-cyan-400 transition-colors">{stat.value}</p>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500 mt-3">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <PortfolioGrid />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4 font-mono text-[10px] text-slate-600">
             <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>SYSTEM_STATUS: OK</span>
             </span>
             <span>|</span>
             <span>BUILD: v2.5.2025</span>
          </div>
          <p className="text-slate-500 font-mono text-[10px] tracking-widest">© 2025 {USER_INFO.name.toUpperCase()} // AWS_ENGINEER</p>
          <div className="flex space-x-6">
            {Object.entries(USER_INFO.socials).map(([key, link]) => (
              <a key={key} href={link} target="_blank" rel="noopener" className="font-mono text-[10px] text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                {key}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <AIChatAssistant />
    </div>
  );
};

export default App;
