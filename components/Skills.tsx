
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const cloudSkills = SKILLS.filter(s => s.category === "Cloud");
  const osSkills = SKILLS.filter(s => s.category === "OS");
  const devopsSkills = SKILLS.filter(s => s.category === "DevOps");
  const networkSkills = SKILLS.filter(s => s.category === "Network");

  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3 space-y-6">
             <h2 className="text-4xl font-extrabold tracking-tight font-mono">TECH_STACK</h2>
             <p className="text-slate-500 font-mono text-sm">AWS Cloud Services & DevOps Tools I work with in my projects.</p>
             <div className="pipeline-line mt-8"></div>
          </div>

          <div className="md:w-2/3 space-y-12">
            {/* Cloud Technologies */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono text-cyan-500 tracking-widest uppercase">☁️ Cloud Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {cloudSkills.map(skill => (
                  <div key={skill.name} className="cyber-border p-3 bg-black/40 text-center group hover:border-cyan-500/50 transition-all">
                    <p className="text-xs font-mono text-slate-300 group-hover:text-cyan-400 transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Systems */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono text-emerald-500 tracking-widest uppercase">💻 Operating Systems</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {osSkills.map(skill => (
                  <div key={skill.name} className="cyber-border p-3 bg-black/40 text-center group hover:border-emerald-500/50 transition-all">
                    <p className="text-xs font-mono text-slate-300 group-hover:text-emerald-400 transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps Tools */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono text-purple-500 tracking-widest uppercase">🛠️ DevOps Tools & Platforms</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {devopsSkills.map(skill => (
                  <div key={skill.name} className="cyber-border p-3 bg-black/40 text-center group hover:border-purple-500/50 transition-all">
                    <p className="text-xs font-mono text-slate-300 group-hover:text-purple-400 transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Networking & Security */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono text-orange-500 tracking-widest uppercase">🔒 Networking & Security</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {networkSkills.map(skill => (
                  <div key={skill.name} className="cyber-border p-3 bg-black/40 text-center group hover:border-orange-500/50 transition-all">
                    <p className="text-xs font-mono text-slate-300 group-hover:text-orange-400 transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
