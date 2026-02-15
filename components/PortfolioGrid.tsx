
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const PortfolioGrid: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AWS & DevOps' | 'Personal Projects'>('All');

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'AWS & DevOps') return p.category === 'DevOps';
    if (filter === 'Personal Projects') return p.category === 'Personal';
    return false;
  });

  return (
    <section id="projects" className="py-24 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <div className="w-4 h-4 bg-cyan-500/20 border border-cyan-500 rounded-sm"></div>
               <h2 className="text-4xl font-bold tracking-tight font-mono">INFRA_PORTFOLIO</h2>
            </div>
            <p className="text-slate-500 font-mono text-sm tracking-tight">Deployment history and architecture designs.</p>
          </div>
          
          <div className="flex bg-black border border-white/10 p-1 rounded-sm">
            {['All', 'AWS & DevOps', 'Personal Projects'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 text-xs font-mono font-bold transition-all duration-300 active:scale-95 ${filter === f ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'text-slate-500 hover:text-white'}`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-black/40 border border-white/5 hover:border-cyan-500/40 transition-all duration-500 cursor-pointer overflow-hidden p-6 cyber-border block"
            >
              <div className="flex gap-6">
                 {/* Visual Code Representation or Icon */}
                 <div className="w-1/3 aspect-square bg-slate-900 overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                 </div>
                 
                 <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-mono text-cyan-500 tracking-tighter">PRJ_{project.id.padStart(3, '0')}</span>
                       <span className="text-[10px] font-mono text-slate-500">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-mono line-clamp-2">{project.description}</p>
                 </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono py-1 px-2 border border-white/5 bg-white/5 text-slate-400 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative scanline effect */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-cyan-500 group-hover:h-full transition-all duration-700"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
