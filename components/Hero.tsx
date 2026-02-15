
import React from 'react';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Technical Info */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-3 text-cyan-400 font-mono text-sm border-b border-cyan-400/30 pb-2">
            <span className="animate-pulse">●</span>
            <span>SYSTEMS_DEPLOYED: ACTIVE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
            Mahesh <span className="text-cyan-500">Shelke</span>
          </h1>
          
          <div className="flex items-center space-x-4">
             <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
             <p className="font-mono text-lg text-emerald-400">AWS & DevOps Specialist</p>
          </div>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
            Architecting high-availability infrastructure. BCA 2025 graduate focused on the intersection of <span className="text-white underline decoration-cyan-500">Cloud Automation</span> and <span className="text-white underline decoration-emerald-500">Security</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#projects" className="px-8 py-4 cyber-border bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold transition-all hover:scale-105 active:scale-95">
              GET_INFRA_WORK()
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/10 hover:bg-white/5 text-slate-300 font-mono font-bold transition-all hover:scale-105 active:scale-95">
              SSH_CONNECT
            </a>
          </div>
        </div>

        {/* Right Side: Code/Terminal Element */}
        <div className="md:col-span-5 hidden md:block">
          <div className="cyber-border bg-black/60 backdrop-blur-xl rounded-sm overflow-hidden shadow-2xl">
            <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-white/10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest">provision_mahesh.tf</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2 leading-relaxed">
              <div className="flex space-x-3">
                <span className="text-purple-400">resource</span>
                <span className="text-emerald-400">"aws_engineer"</span>
                <span className="text-cyan-400">"mahesh"</span>
                <span>{"{"}</span>
              </div>
              <div className="pl-6 flex space-x-3">
                <span className="text-slate-500">degree</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"BCA_2025"</span>
              </div>
              <div className="pl-6 flex space-x-3">
                <span className="text-slate-500">specialization</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">["AWS", "Kubernetes"]</span>
              </div>
              <div className="pl-6 flex space-x-3">
                <span className="text-slate-500">iac_tool</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"Terraform"</span>
              </div>
              <div className="pl-6 flex space-x-3">
                <span className="text-slate-500">cicd_platform</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"GitHub_Actions"</span>
              </div>
              <div className="pl-6 flex space-x-3">
                <span className="text-slate-500">uptime</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"99.999%"</span>
              </div>
              <div>{"}"}</div>
              <div className="mt-4 pt-4 border-t border-white/5 text-[10px] text-emerald-500 animate-pulse">
                $ terraform plan --out=career.plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
